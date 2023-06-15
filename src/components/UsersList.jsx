import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/users/usersSlice";

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchUser())
  }, [dispatch])

  const usersList = users.map((user, key) => (
    <div key={key}>
      {" "}
      Firstname: {user.name.firt}, Lastname: {user.name.last}
    </div>
  ));

  const content = isLoading ? (
    <div>...Loading</div>
  ) : error ? (
    <div>An error occured: {error} </div>
  ) : (
    usersList
  );
  return <>{content}</>;
};

export default UsersList;
