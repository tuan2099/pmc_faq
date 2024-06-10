import { color } from "@/app/utils/constant";
import { banner } from "@/assets/images";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <Box sx={{ marginTop: "94px", marginBottom: "24px" }}>
      <Heading
        sx={{
          paddingBottom: "24px",
          marginBottom: "8px",
          fontSize: "48px",
          fontWeight: "700",
        }}
      >
        Q&A Platform
      </Heading>
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={50}>
        <Box flex={1}>
          <Text mb={20}>
            PMC luôn coi mọi ý kiến đề xuất, góp ý là tài sản trí tuệ, đóng vai
            trò then chốt trong việc xây dựng văn hóa lắng nghe và đảm bảo sự
            hài lòng của khách hàng .
          </Text>
          <Text mb={20}>
            Chiến lược 3C của PMC gồm: Communication (Giao tiếp), Community
            (Cộng đồng), và Connectivity (Kết nối) nơi mọi thành viên PMC duy
            trì kênh giao tiếp mở, xây dựng cộng đồng đoàn kết và tối ưu hóa các
            phương thức kết nối để đảm bảo mọi thông tin phản hồi được xử lý kịp
            thời và hiệu quả nhất.
          </Text>
          <Text mb={20}>
            Q&A Platform không chỉ là nơi giải đáp thắc mắc mà còn là một nền
            tảng kiến thức để các thành viên PMC có thể học hỏi lẫn nhau để nâng
            cao kiến thức, kinh nghiệm và kỹ năng. Điều này giúp chúng ta không
            ngừng nâng cao trải nghiệm dịch vụ dành cho khách hàng.
          </Text>
          <Button
            textTransform={"uppercase"}
            sx={{
              paddingX: "24px",
              paddingY: "12px",
              backgroundColor: color.buttonColor,
              borderRadius: "4px",
              color: color.white,
            }}
          >
            Chi tiết
          </Button>
        </Box>
        <Image src={banner} alt="banner" style={{ flex: "1" }} />
      </Flex>
    </Box>
  );
};

export default Intro;
