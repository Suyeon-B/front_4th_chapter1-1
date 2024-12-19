export const NavigationLinks = (navigator) => {
  const { id, href, text } = navigator;
  const currentPath = window.location.pathname;
  const isCurrentPath = currentPath === href;

  return `
    <li>
      <a 
        href="${href}" 
        id="${id}" 
        class="${isCurrentPath ? "font-bold text-blue-600" : "text-gray-600"}"
      >
        ${text}
      </a>
    </li>
  `;
};
