export interface ResinTypeData<T> {
  industries: { label: string; grades: T[] }[];
}

export interface NovolakPowder {
  label: string;
  flow: string;
  hexaContent: string;
  features: string;
}

export interface NovolakSolution {
  label: string;
  viscosity: string;
  solidContent: string;
  features: string;
}
export interface Resole {
  label: string;
  viscosity: string;
  solidContent: string;
  features: string;
}

const novolakPowders: ResinTypeData<NovolakPowder> = {
  industries: [
    {
      label: "For Friction Materials",
      grades: [
        {
          label: "KRC2012P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "High free Phenol content",
        },
      ],
    },
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRC2002P",
          flow: "Short",
          hexaContent: "9.5 - 10.5",
          features:
            "Mag carbon bricks; for good green strength and working time",
        },
      ],
    },
  ],
};

const novolakSolutions: ResinTypeData<NovolakSolution> = {
  industries: [
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRR4004N",
          viscosity: "10,000 - 13,000 @ 20 C",
          solidContent: "60 - 65",
          features: "Slide gates and nozzles",
        },
      ],
    },
  ],
};

const resoles: ResinTypeData<Resole> = {
  industries: [
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRR3005R",
          viscosity: "1,500 - 2,500 @ 25 C",
          solidContent: "73 - 77",
          features: "Tap hole mass; for high strength and flexibility",
        },
      ],
    },
  ],
};

export { novolakPowders, novolakSolutions, resoles };
