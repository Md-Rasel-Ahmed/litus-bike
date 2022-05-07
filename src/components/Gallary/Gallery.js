import * as React from "react";
import "./gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export default function Gallery() {
  const [isLike, setIsLike] = React.useState(false);
  const [storeLikeId, setStoreLikeId] = React.useState([]);
  const [galleryItems, setGalleryItems] = React.useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://aqueous-harbor-59183.herokuapp.com/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryItems(data));
  }, []);
  React.useEffect(() => {
    fetch("https://aqueous-harbor-59183.herokuapp.com/userLikeItems")
      .then((res) => res.json())
      .then((data) => {
        setStoreLikeId(data);
      });
  }, [isLike]);

  // Like button active for user liked items
  let rasel = storeLikeId.filter((item) => item.email === user?.email);
  for (let i = 0; i < rasel.length; i++) {
    for (let j = 0; j < galleryItems?.length; j++) {
      if (galleryItems[j].title === rasel[i].title) {
        galleryItems[j].color = "red";
      }
    }
  }

  // handle like button click
  const handleLIke = (e, title) => {
    if (user) {
      e.target.style.color = "red";
      setIsLike(!isLike);
      let AllLikesItems = storeLikeId.filter((item) => item.title === title);
      if (AllLikesItems.find((item) => item.email === user.email)) {
        toast.warning("This item  already Liked");
        return;
      } else {
        const findUserLikeItems = galleryItems.find(
          (item) => item.title === title
        );
        delete findUserLikeItems._id;
        findUserLikeItems.color = "red";
        findUserLikeItems.email = user.email;
        fetch("http://localhost:5000/userLikeItems", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(findUserLikeItems),
        })
          .then((res) => res.json())
          .then((data) => {});
      }
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
        {galleryItems?.map((item) => (
          <ImageListItem key={item._id}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <Button onClick={(e) => handleLIke(e, item.title)}>
                    <FavoriteIcon style={{ color: item.color }} />
                  </Button>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
