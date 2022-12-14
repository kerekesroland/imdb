import axios from "axios";

export const getWikiSearch = async (search: string) => {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
  const res: any = await axios.get(apiUrl);
  return await res.data;
};
