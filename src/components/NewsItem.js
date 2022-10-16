import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const NewsItem = ({ author, title,url, urlToImage, publishedAt }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={urlToImage} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{author}</h5>
        <h5 className="item-price">publishedAt: {publishedAt}</h5>
        <a href={url}
          className="remove-btn"
        >
          View
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
