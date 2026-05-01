type NotificationType = "info" | "success" | "warning" | "error";
interface RoxySeoCommandContext {
    ui: {
        notify(message: string, type?: NotificationType): void;
    };
}
interface RoxySeoExtensionAPI {
    setLabel(label: string): void;
    registerCommand(name: string, options: {
        description?: string;
        handler: (args: string, ctx: RoxySeoCommandContext) => Promise<void>;
    }): void;
}
export default function roxySeoExtension(pi: RoxySeoExtensionAPI): void;
export {};
