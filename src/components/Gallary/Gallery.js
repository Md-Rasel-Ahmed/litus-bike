import * as React from "react";
import "./gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import gallery1 from "../../img/Gallery/275211293_515965246711633_8020881496158124859_n.jpg";
import gallery2 from "../../img/Gallery/gallery 2.jpg";
import gallery3 from "../../img/Gallery/gallery 3.jpg";
import gallery4 from "../../img/Gallery/gallery 4.jpg";
import gallery5 from "../../img/Gallery/galley 5.jpg";
import gallery6 from "../../img/Gallery/galley 6.jpg";
import gallery7 from "../../img/Gallery/gallery 7.jpg";
import gallery8 from "../../img/Gallery/gallery 8.jpg";
import gallery9 from "../../img/Gallery/gallery 9.jpg";
import gallery10 from "../../img/Gallery/gallery 10.jpg";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const itemData = [
  {
    img: gallery1,
    title: "motor bike img",
    id: 10,
  },
  { img: gallery2, title: "Honda ADV 155", id: 1 },
  { img: gallery3, title: "New bike one", id: 2 },
  { img: gallery4, title: "HONDA AIRBLADE 125", id: 3 },
  { img: gallery5, title: "HONDA SCOOPY CLUB 12", id: 4 },
  { img: gallery6, title: "HONDA SCOOPY CLUB 12", id: 5 },
  { img: gallery7, title: "HONDA SCOOPY CLUB 12", id: 6 },
  { img: gallery8, title: "Ducati M821 MONSTER	", id: 7 },
  { img: gallery9, title: "HONDA PCX 160", id: 8 },
  { img: gallery10, title: "HONDA REBEL 300	", id: 9 },
];

export default function Gallery() {
  const [isLike, setIsLike] = React.useState(false);
  const [storeLikeId, setStoreLikeId] = React.useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLIke = (e, id) => {
    if (user?.email) {
      let emty = [];
      setIsLike(!isLike);
      e.target.style.color = isLike ? "red" : "white";
      emty.push(id);
      setStoreLikeId([...storeLikeId, ...emty]);
      console.log(storeLikeId);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "#1976D2",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0px",
        }}
      >
        GALLERY
      </h1>
      <ImageList sx={{ height: 450 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteIcon
                    style={{ color: "white" }}
                    onClick={(e) => handleLIke(e, item.id)}
                  />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
