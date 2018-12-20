//@flow

type Props = {
  h: string,
  children: any,
};

// const H1 = styled.h1``;
// const H2 = styled.h2``;
// const H3 = styled.h3``;
// const H4 = styled.h4``;
// const H5 = styled.h5``;
// const H6 = styled.h6``;

// const headings = children => ({
//   '1': <H1 children={children} />,
//   '2': <H2>{children}</H2>,
//   '3': <H3>{children}</H3>,
//   '4': <H4>{children}</H4>,
//   '5': <H5>{children}</H5>,
//   '6': <H6>{children}</H6>,
// });

const Heading = ({ h, children }: Props) => {
  return ""
  // return headings(children)[h];
};

export default Heading;
