import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type ISize = "large" | "default" | "small";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  size: {
    type: String as PropType<ISize>,
    default: "default",
  },
  icon: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
} as const;

export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      default: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <button
        class={`
        px-${size[props.size].x}
        py-${size[props.size].y}
        ${props.round ? "rounded-full" : "rounded-lg"}
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-800
        border-${props.color}-${props.plain ? "500" : "500"}
        cursor-pointer
        border-solid
        test-${props.plain ? props.color + "-500" : "white"}
        test-${size[props.size].text}
        hover:test-white
        transition duration-300 ease-in-out transform hover:scale-105
        m-1
      `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
