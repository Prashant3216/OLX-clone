import { getData } from "../utilities/api";
import { useState, useEffect } from "react";
import { ListSlider } from "./ListSlider";
import { Skeleton } from "@chakra-ui/react";

export function Slider() {
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData(page)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setSlideData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [page]);

  let handlePage=(val)=>{
    setPage(page+val)
  }
  

  return isLoading ? (
    <Skeleton maxW={1300} m="auto">
      <ListSlider data={slideData} handlePage={handlePage} current={page}/>
    </Skeleton>
  ) : isError ? null : (
    <ListSlider data={slideData} handlePage={handlePage} current={page}/>
  );
}
