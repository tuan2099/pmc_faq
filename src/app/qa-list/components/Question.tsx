import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";

import { color } from "@/app/utils/constant";

const Question = ({ data }: any) => {
  return (
    <AccordionItem bgColor={color.gray} mb={"24px"}>
      <AccordionButton>
        <Box
          flex="1"
          textAlign="left"
          sx={{ display: "flex", gap: "20px", padding: "24px" }}
        >
          <Image
            src={"https://pmcweb.vn/wp-content/uploads/anh4-01.jpg"}
            alt="qa"
            width={128}
            height={128}
          />
          {data.question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel sx={{ padding: "16px 24px" }}>
        {data.answer}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Question;
