import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import NewsItem from "./NewsItem";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const {articles,totalNews} = useSelector((store) => store.news);
  let uid = 0;
  console.log('News ',totalNews,articles)
  return (
    <section className="cart">
      <header>
        <h2>News</h2>
      </header>
      <div>
        {articles.map((item) => {
          return <NewsItem key={uid++} {...item} />;
        })}
      </div>
    </section>
  );
};

export default NewsContainer;
