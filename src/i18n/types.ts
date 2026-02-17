export interface Dictionary {
  common: {
    name: string;
    jobTitle: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    workExperience: string;
    contact: string;
  };
  home: {
    welcome: string;
  };
  about: {
    greeting: string;
    intro1: string;
    intro2: string;
    intro3: string;
    location: {
      label: string;
      value: string;
    };
    education: {
      label: string;
      value: string;
    };
    mbti: {
      label: string;
      value: string;
    };
    hobby: {
      label: string;
      value: string;
    };
    funFacts: {
      label: string;
      value: string;
    };
  };
  workExperience: {
    current: string;
    present: string;
    babitalk: {
      description: string;
    };
    megazone: {
      description: string;
    };
  };
  projects: {
    megabobs: {
      description: string;
    };
  };
  skills: {
    frontend: string;
    styling: string;
    stateManagement: string;
    cloudInfra: string;
    tools: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  birthday: {
    title: string;
    message: string;
    thanks: string;
  };
  windowCard: {
    ariaBack: string;
    ariaFront: string;
    ariaLeft: string;
    ariaRight: string;
  };
  footer: {
    rights: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    about: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
    };
    workExperience: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
  };
}
