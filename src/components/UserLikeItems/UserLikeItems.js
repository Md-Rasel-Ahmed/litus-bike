import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserLikeItems() {
  const [userLikesItems, setUserLikesItems] = React.useState([]);
  const [user] = useAuthState(auth);
  React.useEffect(() => {
    fetch("http://localhost:5000/userLikeItems")
      .then((res) => res.json())
      .then((data) => {
        let userData = data.filter((item) => item.email === user.email);
        setUserLikesItems(userData);
      });
  }, []);
  return (
    <div align="center">
      {userLikesItems?.map((item) => {
        return (
          <Card key={item._id} sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardActionArea>
              <img src={item.image} width="100%" alt="" />
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
