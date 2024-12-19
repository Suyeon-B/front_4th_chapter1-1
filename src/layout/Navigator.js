import { clearUser, getUser } from "@/state/handle-state";
import { NavigationLinks } from "@/layout/NavigationLinks";

export const Navigator = () => {
  const user = getUser().user;

  const content = `
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${navigatorList({ isLoggedIn: user })
          .map((navigator) => NavigationLinks(navigator))
          .join("")}
      </ul>
    </nav>
  `;

  return content;
};

const navigatorList = ({ isLoggedIn }) => [
  {
    id: "home",
    href: "/",
    text: "홈",
  },
  ...(isLoggedIn
    ? [
        {
          id: "profile",
          href: "/profile",
          text: "프로필",
        },
        {
          id: "logout",
          href: "/login",
          text: "로그아웃",
        },
      ]
    : [
        {
          id: "register",
          href: "/login",
          text: "로그인",
        },
      ]),
];

document.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    e.preventDefault();
    clearUser();
    alert("로그아웃 되었습니다.");
  }
});
