import { logo } from "@/assets/images";
import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Flex justify={"space-between"} alignItems={"center"}>
      <Image width={160} src={logo} alt="logo" />
      <Link href={"sign-in"}>Đăng nhập</Link>
    </Flex>
  );
};

export default Header;
