import { Flex } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} paddingY={50}>
      <SignIn />
    </Flex>
  );
}
