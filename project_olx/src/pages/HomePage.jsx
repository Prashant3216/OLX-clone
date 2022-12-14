import { useEffect } from "react";
import { useContext } from "react";
import { Footer } from "../components/footer";
import { ListOfProduct } from "../components/ListOfProduct";
import { Slider } from "../components/Slider";
import {
    DATA_FAILURE,
  DATA_REQUEST,
  DATA_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../ContextAPI/Actions";
import { AppContext } from "../ContextAPI/ContextProvider";
import { getRequest } from "../utilities/api";
import { Banner } from "./Banner";
import { Banner2 } from "./Banner2";
import {Skeleton,Text} from "@chakra-ui/react"

export function HomePage() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(DATA_REQUEST);
    getRequest("products")
      .then((res) => {
        DATA_SUCCESS.payload = res.data;
        dispatch(DATA_SUCCESS);
      })
      .catch((err) => {
        dispatch(DATA_FAILURE);
        console.log(err);
      });
  }, []);

  return (<>
      <Banner hording={"https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png"}/>
      <Slider/>
      {state.isDataLoading ? <Skeleton maxW={1300} m="auto"><ListOfProduct data={state.data} /> </Skeleton> : state.isError?<Text>Error-404</Text>:<ListOfProduct data={state.data} /> }

      <Banner2/>
      <Footer/>
    </>);
}
