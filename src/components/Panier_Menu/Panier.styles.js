export const styles = {
  panierContainer: {
    // border: solid 2px red,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: "10px",
  },
  panierImg: {
    width: "70px",
    height: "68px",
    padding: "4px 10px 20px 15px",
    // border: solid 2px blue,
    transition: "200ms",
  },

  panierImgHovered: {
    width: "70px",
    height: "68px",
    padding: "4px 10px 20px 15px",
    // border: solid 2px blue,
    transition: "200ms",
    scale: "1.1",
  },

  panierTable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 2px green",
    background: "gray",
    borderRadius: "10px",
    padding: "5px 10px",
    position: "absolute",
    top: "70px",
    right: "80px",
  },
  //<table> element
  table: {
    borderBottom: "3px solid white",
    borderCollapse: "collapse",
  },

  th: {
    backgroundColor: "#96d4d4",
    height: "25px",
    borderRight: "1px solid white",
  },

  thLastChild: {
    backgroundColor: "#96d4d4",
    height: "25px",
  },

  td: {
    width: "100px",
    padding: "10px",
    textAlign: "left",
  },

  tdImg: { width: "100px" },

  tdLastChild: { textAlign: "center" },
};
