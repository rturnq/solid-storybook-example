import { Show } from 'solid-js';

interface Props {
  show: boolean
  fallback?: string
}

export default {
  title: "Example/Control Flow",
};

export const ControlFlow = (args: Props) => (
  <Show when={args.show} fallback={args.fallback}>
    Hello World
  </Show>
);

ControlFlow.args = {
  show: true,
  fallback: "Haha, fallback!",
};
