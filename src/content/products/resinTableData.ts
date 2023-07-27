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
          features: "High free phenol content",
        },
        {
          label: "KRR2004P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "Low free phenol content - environment friendly",
        },
        {
          label: "KRR2021P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "Fast curing and high mechanical strength",
        },
        {
          label: "KRR2023P",
          flow: "High",
          hexaContent: "8.5 - 9.5",
          features: "High wear resistance and mechanical strength",
        },
        {
          label: "KRR2027P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "High thermal stability",
        },
      ],
    },
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRR2002P",
          flow: "Short",
          hexaContent: "9.5 - 10.5",
          features:
            "Mag carbon bricks; for good green strength and working time",
        },
        {
          label: "KRR2003P",
          flow: "Medium",
          hexaContent: "9.5 - 10.5",
          features:
            "Shrouds, tundish, nozzles and slide gates; for low porosity and high density",
        },
      ],
    },
    {
      label: "For Abrasives",
      grades: [
        {
          label: "KRR2002P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "High strength and flexibility",
        },
        {
          label: "KRR2004P",
          flow: "Short",
          hexaContent: "6.5 - 7.5",
          features: "High grinding ratio",
        },
        {
          label: "KRR2026P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "Ultra-low free phenol and dust-supressed resin",
        },
      ],
    },
    {
      label: "For Moulding Materials",
      grades: [
        {
          label: "KRR2001P",
          flow: "Medium",
          hexaContent: "8.5 - 9.5",
          features: "Good mechanical strength, high flame retardancy",
        },
      ],
    },
  ],
};

const novolakSolutions: ResinTypeData<Resole> = {
  industries: [
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRR4004N",
          viscosity: "10,000 - 13,000 @20°C",
          solidContent: "60 - 65",
          features: "Slide gates, nozzles etc.",
        },
        {
          label: "KRR4005N",
          viscosity: "11,500 - 12,000 @20°C",
          solidContent: "68 - 72",
          features: "Tap hole clay",
        },
        {
          label: "KRR4006N",
          viscosity: "12,700 - 13,700 @25°C",
          solidContent: "75 - 78",
          features: "Mag carbon bricks",
        },
        {
          label: "KRR4009N",
          viscosity: "7,000 - 9,000 @30°C",
          solidContent: "75 - 78",
          features: "Mag carbon bricks",
        },
      ],
    },
    {
      label: "For Foundries",
      grades: [
        {
          label: "KRF4001N",
          viscosity: "100 - 130s @ 30°C in FC 4",
          solidContent: "70 - 73",
          features: "Shell mounding cores",
        },
      ],
    },
  ],
};

const resoles: ResinTypeData<NovolakSolution> = {
  industries: [
    {
      label: "For Refractories",
      grades: [
        {
          label: "KRR3005R",
          viscosity: "1,500 - 2,200 @25°C",
          solidContent: "73 - 77",
          features: "Tap hole mass, for high strength and flexibility",
        },
        {
          label: "KRR3017R",
          viscosity: "3,000 - 4,000 @ 25°C",
          solidContent: "80 - 85",
          features: "Mag carbon bricks; for different work life requirements",
        },
        {
          label: "KRR3019R",
          viscosity: "6,000 - 7,000 @25°C",
          solidContent: "Min 78",
          features: "Mag carbon bricks; for high strength with good work life",
        },
      ],
    },
    {
      label: "For Bonded Absrasives",
      grades: [
        {
          label: "KRA3007R",
          viscosity: "45 - 55s @ 25°C in FC B4",
          solidContent: "60 - 65",
          features: "Bonded abrasives; for excellent grain wetting",
        },
      ],
    },
    {
      label: "For Composites",
      grades: [
        {
          label: "KRC3013R",
          viscosity: "15 - 20s @ 25°C in FC 84",
          solidContent: "55 - 60",
          features: "Very low formaldehyde content impregnating resin",
        },
      ],
    },
    {
      label: "For Foundry Specialties",
      grades: [
        {
          label: "KRF3006R",
          viscosity: "29 - 33s @30°C in FC B4",
          solidContent: "70 - 74",
          features:
            "Acid cure, low gas emission, long bench life, nitrogen free",
        },
        {
          label: "KRF3012R",
          viscosity: "24 - 27s @30°C in FC B4",
          solidContent: "48 - 52",
          features:
            "Ester cure, environment friendly, excellent sand reclaimability, long shelf life",
        },
      ],
    },
  ],
};

export { novolakPowders, novolakSolutions, resoles };
