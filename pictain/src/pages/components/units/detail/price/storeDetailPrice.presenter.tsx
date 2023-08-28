import * as S from "./storeDetailPrice.styles";

export default function StoreDetailPriceComponentUI() {
  const PRICE_LIST = [
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
    { pricename: "증명사진", pricevalue: 10000 },
  ];

  return (
    <S.Wrapper>
      <S.Title>가격</S.Title>
      {PRICE_LIST.map((el, index) => (
        <S.Row key={index}>
          <S.PriceName>{el.pricename}</S.PriceName>
          <S.PriceValue>{el.pricevalue}</S.PriceValue>
        </S.Row>
      ))}
    </S.Wrapper>
  );
}
