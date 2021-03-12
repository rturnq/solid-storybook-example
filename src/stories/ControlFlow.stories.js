export default {
  title: "Example/Control Flow",
};

export const ControlFlow = (args) => (
  <Show when={args.show} fallback={args.fallback}>
    Hello World
  </Show>
);

ControlFlow.args = {
  show: true,
  fallback: "Haha, fallback!",
};
