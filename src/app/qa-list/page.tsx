"use client";

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Input,
} from "@chakra-ui/react";
import { useClerk } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
import { data } from "../../..";
import Intro from "@/app/components/Intro";
import Question from "@/app/qa-list/components/Question";
import { useEffect, useState } from "react";

const QAList = () => {
  //   const { signOut } = useClerk();
  //   const router = useRouter();+

  const [search, setSearch] = useState("");

  const handleSignOut = async () => {
    // await signOut();
    // router.push("/sign-in"); // Điều hướng về trang đăng nhập
  };

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = data.filter((item) =>
        item.question.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, data]);

  return (
    <Box p={5}>
      <Intro />
      <Box>
        <Box>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Box>
        <Accordion allowMultiple>
          {filteredData.map((item, index) => (
            <Question key={index} data={item} />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default QAList;
