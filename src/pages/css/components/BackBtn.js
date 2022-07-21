import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();
  return <button className="back-btn bottom" onClick={() => navigate(-1)}></button>;
}
