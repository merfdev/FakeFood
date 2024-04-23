import CategoriesPage from "@/components/templates/CategoriesPage";

function index({ data }) {
  return <CategoriesPage data={data} />;
}

export default index;

export async function getServerSideProps(context) {
  const { difficulty, time } = context.query;
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty == difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetial] = cookingTime.split(" ");
      if (time == "Less" && timeDetial && +timeDetial <= 30) {
        return detail;
      } else if (time == "More" && timeDetial && +timeDetial > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });
  return {
    props: { data: filteredData },
  };
}
