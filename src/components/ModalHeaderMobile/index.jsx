import { Button, Link, VStack } from "@chakra-ui/react";

export const ModalHeaderMobile = () => {
  return (
    <VStack
      w={"100vw"}
      ml={"0px"}
      top="80px"
      display={{ base: "flex", md: "none" }}
      left={"-8px"}
      alignItems="left"
      position={"fixed"}
      justifyContent={"center"}
      pb={"20px"}
    >
      <VStack
        alignItems={"left"}
        ml={"0px"}
        borderBottom={`2px solid ${global.grey6}`}
      >
        <Link
          width={"80px"}
          fontSize={"16px"}
          fontFamily="Inter"
          fontWeight={"600"}
          color={global.grey2}
          pt={"32px"}
          pl={"16px"}
          href="/"
        >
          Carros
        </Link>
        <Link
          width={"80px"}
          fontSize={"16px"}
          fontFamily="Inter"
          fontWeight={"600"}
          color={global.grey2}
          pt={"32px"}
          pl={"16px"}
          href="/"
        >
          Motos
        </Link>
        <Link
          width={"80px"}
          fontSize={"16px"}
          fontFamily="Inter"
          fontWeight={"600"}
          color={global.grey2}
          pt={"32px"}
          pl={"16px"}
          pb={"32px"}
          href="/"
        >
          Leilão
        </Link>
      </VStack>
      <Link
        width={"110px"}
        fontSize={"16px"}
        fontFamily="Inter"
        fontWeight={"600"}
        color={global.brand1}
        pt={"32px"}
        pl={"16px"}
        pb={"32px"}
        href="/"
      >
        Fazer Login
      </Link>
      <Button
        fontSize={"16px"}
        fontFamily="Inter"
        fontWeight={"600"}
        w={"300px"}
        h={"48px"}
        border={`2px solid ${global.grey4}`}
        bgColor={global.grey10}
      >
        Cadastrar
      </Button>
    </VStack>
  );
};
