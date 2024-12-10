const ArrowUp = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7L7 1L1 7"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const BookIcon = () => (
  <svg
    width="23"
    height="21"
    viewBox="0 0 23 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.96094 1.74219H7.96094C9.0218 1.74219 10.0392 2.16361 10.7894 2.91376C11.5395 3.66391 11.9609 4.68132 11.9609 5.74219V19.7422C11.9609 18.9465 11.6449 18.1835 11.0823 17.6209C10.5196 17.0583 9.75659 16.7422 8.96094 16.7422H1.96094V1.74219Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.9609 1.74219H15.9609C14.9001 1.74219 13.8827 2.16361 13.1325 2.91376C12.3824 3.66391 11.9609 4.68132 11.9609 5.74219V19.7422C11.9609 18.9465 12.277 18.1835 12.8396 17.6209C13.4022 17.0583 14.1653 16.7422 14.9609 16.7422H21.9609V1.74219Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export { ArrowDown, ArrowUp, BookIcon };
