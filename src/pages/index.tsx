import React, { useState } from "react";
import type { NextPage } from "next";
// eslint-disable-next-line object-curly-newline
import { Flex, Box, Text, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import generator from "../utils/generator";
import copyText from "../utils/copy";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [indicacoes, setIndicacoes] = useState<string[]>([]);
  const onSubmit = ({ nome, projeto }: Record<string, string>) => {
    const results = generator({ nome, projeto });
    setIndicacoes(results);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="32px"
      gridRowGap="24px"
    >
      <Text as="h1" fontSize="2rem" fontWeight="bold">
        Indicação generator
      </Text>
      <Text as="h2" fontSize="1.2rem">
        Trabalhadores do mundo uni-vos
      </Text>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        alignItems="center"
        width="30%"
        minWidth="300px"
        gridRowGap="24px"
      >
        <Box as="label" width="100%">
          Nome da pessoa*
          <Input
            type="text"
            placeholder="Nome do slack"
            {...register("nome", { required: true })}
          />
        </Box>
        <Box as="label" width="100%">
          Projeto/Setor
          <Input type="text" placeholder="Projeto" {...register("projeto")} />
        </Box>
        <Button type="submit">Gerar indicações</Button>
      </Flex>
      <Flex direction="column" width="40%" minWidth="300px" gridRowGap="18px">
        {indicacoes.map((indicacao) => (
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gridColumnGap="8px"
            borderRadius="8px"
            backgroundColor="gray.100"
            padding="12px"
            width="100%"
          >
            <Text>{indicacao}</Text>
            <Button
              type="button"
              colorScheme="blackAlpha"
              onClick={() => {
                copyText(indicacao);
              }}
            >
              Copiar
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
