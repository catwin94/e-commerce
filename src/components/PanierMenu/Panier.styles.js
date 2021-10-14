// Theme Font
const themeFont = "'Noto Sans', sans-serif";
const secondaryFont = "'Dancing Script', cursive";

//Colors
const whiteColor = "#f0f0f0";
const ligthGrayColor = "rgb(197, 197, 197)";
const grayColor = "#84828F";
const darkGrayColor = "#3b3936";
const blueColor = "#40d3dc";
const redFontColor = "#BA1F33";

// Fonts size
const fontSize = {
  regular: "0.5rem",
  medium: "1.3rem",
  normal: "1.5rem",
  large: "2rem",
  xlarge: "2.3rem",
  xxlarge: "5rem",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingTop: "10px",
};

export const styles = {
  //Panier
  panierGlobal: {
    panier: {
      panierContainer: containerStyle,
      panierImg: {
        width: "70px",
        height: "68px",
        padding: "4px 10px 20px 15px",
        transition: "200ms",
      },

      panierImgHovered: {
        width: "70px",
        height: "68px",
        padding: "4px 10px 20px 15px",
        transition: "200ms",
        scale: "1.1",
      },
    },
    //Table
    table: {
      divTableContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "solid 2px green",
        boxShadow: "0px 0px 20px 10px rgba(0,0,0,0.4)",
        // boxShadow: "0px 0px 21px 4px rgba(64,211,220,0.55)",
        background: "red",
        fontWeight: "bold",
        color: darkGrayColor,
        borderRadius: "10px",
        padding: "10px 10px",
        position: "absolute",
        top: "70px",
        right: "80px",
      },
      //<table> element
      divTable: {
        display: "table",
        width: "10px",
        height: "10px",
        overflowY: "auto",
        overflowX: "auto",
        // borderRadius: "10px",
        // overflow: "hidden",
        borderCollapse: "collapse",
        // border: "1px solid white",
      },
      //<thead> element
      divTableHeading: {
        display: "table-header-group",
        width: "100%",
        tableLayout: "fixed",
        // color: grayColor,
      },

      //<tbody> element
      divTableBody: {
        display: "table-row-group",
        width: "100%",
        tableLayout: "fixed",
        // height: "10px",
        overflow: "auto",
        // overflowX: "hidden",
      },
      /* <tfoot> element */
      divTableFoot: {
        display: "table-footer-group",
        fontWeight: "bold",
      },

      /* <tr> element */
      divTableRow: {
        display: "table-row",
        borderBottom: `2px solid ${whiteColor}`,
        textAlign: "center",
        background: ligthGrayColor,
        // width: "100%",
        // tableLayout: "fixed",
      },

      /* <td> element */
      divTableHead: {
        display: "table-cell",
        background: blueColor,
        padding: "3px 10px",
        // width: "100px",
      },
      divTableCell: {
        display: "table-cell",

        textAlign: "center",
        verticalAlign: "middle",
        padding: "3px 10px",
      },

      /* Otros */
      imgItem: {
        width: "100px",
      },
    },
    //Button
    button: {
      container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "55px",
      },
      button: {
        width: "25px",
        height: "25px",
        borderRadius: "20px",
        backgroundColor: blueColor,
        // border: "none",
        transition: "200ms",
      },
      divContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      span: {
        width: "11px",
        position: "absolute",
        border: "1px solid white",
      },
    },
  },
  panierMobile: {
    panier: {
      panierContainer: containerStyle,
      panierImg: {
        width: "70px",
        height: "68px",
        padding: "4px 10px 20px 15px",
        transition: "200ms",
      },

      panierImgHovered: {
        width: "70px",
        height: "68px",
        padding: "4px 10px 20px 15px",
        transition: "200ms",
        scale: "1.1",
      },
    },
    //Table
    table: {
      divTableContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: whiteColor,
        // border: "solid 2px green",
        boxShadow: "0px 0px 20px 10px rgba(0,0,0,0.4)",
        // boxShadow: "0px 0px 21px 4px rgba(64,211,220,0.55)",
        // background: whiteColor,
        background: "blue",
        fontWeight: "bold",
        color: darkGrayColor,
        borderRadius: "10px",
        padding: "10px 10px",
        position: "absolute",
        top: "70px",
        right: "80px",
      },
      //<table> element
      divTable: {
        display: "table",
        width: "10px",
        height: "10px",
        overflowY: "auto",
        overflowX: "auto",
        // borderRadius: "10px",
        // overflow: "hidden",
        borderCollapse: "collapse",
        // border: "1px solid white",
      },
      //<thead> element
      divTableHeading: {
        display: "table-header-group",
        width: "100%",
        tableLayout: "fixed",
        // color: grayColor,
      },

      //<tbody> element
      divTableBody: {
        display: "table-row-group",
        width: "100%",
        tableLayout: "fixed",
        // height: "10px",
        overflow: "auto",
        // overflowX: "hidden",
      },
      /* <tfoot> element */
      divTableFoot: {
        display: "table-footer-group",
        fontWeight: "bold",
      },

      /* <tr> element */
      divTableRow: {
        display: "table-row",
        borderBottom: `2px solid ${whiteColor}`,
        textAlign: "center",
        background: ligthGrayColor,
        // width: "100%",
        // tableLayout: "fixed",
      },

      /* <td> element */
      divTableHead: {
        display: "table-cell",
        background: blueColor,
        padding: "3px 10px",
        // width: "100px",
      },
      divTableCell: {
        display: "table-cell",

        textAlign: "center",
        verticalAlign: "middle",
        padding: "3px 10px",
      },

      /* Otros */
      imgItem: {
        width: "100px",
      },
    },
    //Button
    button: {
      container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "55px",
      },
      button: {
        width: "25px",
        height: "25px",
        borderRadius: "20px",
        backgroundColor: blueColor,
        // border: "none",
        transition: "200ms",
      },
      divContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      span: {
        width: "11px",
        position: "absolute",
        border: "1px solid white",
      },
    },
  },
};
