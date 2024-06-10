import http from "@/app/utils/http";

export const getData = () =>
  http.get(
    "https://script.googleusercontent.com/macros/echo?user_content_key=b6cxbyy0C3X7E7izeLXSv9lhrc9c6sGtN7CpZ-riN8cNN1fIdTAVXJ40rKkPYFlaUXHMCxk7JXPAa7gl9zrw_vOMLKbxf8LHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE1X_hQWxg--woOKq8GwyihEi9Zur3qnt1WxtMaHDrwFOpNVuW5fvSyTZ-svZKyxd0qN6DfKoYejRUEyTMq1s5aQPanKsgSkNA&lib=MH5MIPq38dO7axyD7duUBYsGVM84-eLRk"
  );
