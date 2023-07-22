import MainHot3 from "./Hot3/Hot3.container";
import MainInForm from "./Inform/Inform.container";
import MainReview from "./Review/Review.container";

export default function MainPageComponent() {
  return (
    <>
      <MainInForm />;
      <MainHot3 />
      <MainReview />
    </>
  );
}
