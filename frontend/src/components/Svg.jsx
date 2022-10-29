export const Logo = ({ width, height }) => {
  return (
    <svg
      width={width ?? 200}
      height={height ?? 174}
      viewBox="0 0 200 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.6919 58.341L55.3146 45.8707L43.2451 24.9772H156.755L100.018 123.282L87.9489 102.352L66.3265 114.859L100.018 173.2L200 0H0L33.6919 58.341Z"
        fill="url(#paint0_linear_317_1986)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_317_1986"
          x1="248.804"
          y1="28.7081"
          x2="-90.2256"
          y2="56.0492"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.100157" stopColor="#059669" />
          <stop offset="0.707994" stopColor="#00D090" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Facebook = ({ width, height }) => {
  return (
    <svg
      width={width ?? 45}
      height={height ?? 45}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
        fill="#4B5768"
      />
    </svg>
  );
};

export const Twitter = ({ width, height }) => {
  return (
    <svg
      width={width ?? 42}
      height={height ?? 42}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
        fill="#4B5768"
      />
    </svg>
  );
};

export const Google = ({ width, height }) => {
  return (
    <svg
      width={width ?? 40}
      height={height ?? 40}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
        fill="#4B5768"
      />
    </svg>
  );
};

export const EyeAlt = ({ width, height }) => {
  return (
    <svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="currentColor" />
    </svg>
  );
};

export const Eye = ({ width, height }) => {
  return (
    <svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z" fill="currentColor" />
      </svg>
  );
};
