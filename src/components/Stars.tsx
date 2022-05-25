import "./Stars.css";

interface Props {
  stars: number;
  color: string;
}

const Stars = ({ stars, color }: Props) => {
  return (
    <div className="Stars">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 881 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
        // style={fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;}
      >
        <defs>
          <linearGradient id="quarter">
            <stop offset="37%" stop-color={color} />
            <stop offset="37%" stop-color="black" />
          </linearGradient>
          <linearGradient id="half">
            <stop offset="50%" stop-color={color} />
            <stop offset="50%" stop-color="black" />
          </linearGradient>
          <linearGradient id="three-quarters">
            <stop offset="60%" stop-color={color} />
            <stop offset="60%" stop-color="black" />
          </linearGradient>
        </defs>
        <g transform="matrix(1,0,0,1,-634.728,-382.568)">
          <path
            fill={color}
            stroke={color}
            strokeWidth={"5px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            // style={{ fill: "rgb(255,216,0)" }}
          />
        </g>
        <g transform="matrix(1,0,0,1,-447.914,-382.568)">
          <path
            fill={
              stars >= 1.8
                ? color
                : stars >= 1.7
                ? "url(#three-quarters)"
                : stars >= 1.4
                ? "url(#half)"
                : stars >= 1.2
                ? "url(#quarter)"
                : "black"
            }
            stroke={color}
            strokeWidth={"5px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            // style={
            //   stars > 2
            //     ? { fill: "rgb(255,216,0)" }
            //     : {
            //         fill: "rgb(0,0,0)",
            //         stroke: "rgb(255,216,0)",
            //         strokeWidth: "5px",
            //         strokeLinejoin: "round",
            //       }
            // }
          />
        </g>
        <g transform="matrix(1,0,0,1,-261.961,-382.568)">
          <path
            fill={
              stars >= 2.8
                ? color
                : stars >= 2.7
                ? "url(#three-quarters)"
                : stars >= 2.4
                ? "url(#half)"
                : stars >= 2.2
                ? "url(#quarter)"
                : "black"
            }
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            // style={
            //   stars > 4
            //     ? { fill: "rgb(255,216,0)" }
            //     : {
            //         fill: "rgb(0,0,0)",
            //         stroke: "rgb(255,216,0)",
            //         strokeWidth: "5px",
            //         strokeLinejoin: "round",
            //       }
            // }
          />
        </g>
        <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
          <path
            fill={
              stars >= 3.8
                ? color
                : stars >= 3.7
                ? "url(#three-quarters)"
                : stars >= 3.4
                ? "url(#half)"
                : stars >= 3.2
                ? "url(#quarter)"
                : "black"
            }
            stroke={color}
            strokeWidth={"5px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            // style={
            //   stars > 6
            //     ? { fill: "rgb(255,216,0)" }
            //     : {
            //         fill: "rgb(0,0,0)",
            //         stroke: "rgb(255,216,0)",
            //         strokeWidth: "5px",
            //         strokeLinejoin: "round",
            //       }
            // }
          />
        </g>
        <g transform="matrix(1,0,0,1,109.853,-382.568)">
          <path
            fill={
              stars >= 4.8
                ? color
                : stars >= 4.7
                ? "url(#three-quarters)"
                : stars >= 4.4
                ? "url(#half)"
                : stars >= 4.2
                ? "url(#quarter)"
                : "black"
            }
            stroke={color}
            strokeWidth={"5px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            // style={
            //   stars > 8
            //     ? { fill: "rgb(255,216,0)" }
            //     : {
            //         fill: "rgb(0,0,0)",
            //         stroke: "rgb(255,216,0)",
            //         strokeWidth: "5px",
            //         strokeLinejoin: "round",
            //       }
            // }
          />
        </g>
      </svg>
    </div>
  );
};

export default Stars;