import LoanCompare from "./loan-compare";
export default LoanCompare;

export const LoanCompare_Query = `
  loan_compare{
    _type,
    title,
    list,
    compare_block_title,
    compare_block_annotation,
    compare_min_amount,
    compare_max_amount,
    compare_cta{
      text,
      href
    }
  },
`;
