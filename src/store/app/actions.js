import { createAsyncThunk } from "@reduxjs/toolkit";

import { submit } from "utils/proxy";

export const searchData = createAsyncThunk(
  "App/GET_DATA",
  async (payload) => await submit("GET", `users/${payload}/repos`, {})
);
