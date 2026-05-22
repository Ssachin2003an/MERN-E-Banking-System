const express = require("express");
const router = express.Router();
const {
  validatePassword,
  checkPassword,
} = require("../middlewares/userMiddleware/userMiddlewares");
const {
  authUserProtect,
} = require("../middlewares/userMiddleware/authUsersMiddleware");

const {
  authAdminProtect,
} = require("../middlewares/adminMiddlewares/authAdminsMiddleware");

const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
  updateUserStatus,
  notificationUpdate,
} = require("../controllers/usersControllers");
const {
  checkUserStatus,
} = require("../middlewares/userMiddleware/checkUserStatus");

// router
//   .route("/register")
//   .post(validatePassword, createUser);

// router
//   .route("/")
//   .get(authAdminProtect, getUsers)
//   .post(validatePassword, createUser);
router.post("/register", validatePassword, createUser);
router.get("/", authAdminProtect, getUsers);


router
  .route("/:id")
  .get(authUserProtect, getOneUser)
  .put(
    authUserProtect,
    checkUserStatus,
    checkPassword,
    validatePassword,
    updateUser
  )
  .delete(authAdminProtect, deleteUser);

// router.route("/login").post(userLogin);
router.post("/login", userLogin);
// router.route("/:id/updatestatus").put(authAdminProtect, updateUserStatus);
router.put("/:id/updatestatus", authAdminProtect, updateUserStatus);

// router
//   .route("/notifications/:id")
//   .put(authUserProtect, checkUserStatus, notificationUpdate);

router.put(
  "/notifications/:id",
  authUserProtect,
  checkUserStatus,
  notificationUpdate
);
module.exports = router;
