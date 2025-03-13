import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Estructura y disposición del contenedor
        "w-full",                           // El campo ocupa el 100% del ancho disponible
        "p-2",                                // Relleno de 2 unidades en todos los lados
        "text-left",                          // Alineación del texto a la izquierda
        //  "rounded-md",                          Bordes redondeados medianos
        "text-",                            // Tamaño de texto pequeño
        "font-semibold",                      // Peso de fuente semibold (semi-negrita)
      
        // Transición de colores y comportamiento
        "transition-colors duration-300",     // Transición suave de color durante 300ms
      
        // Estilo de borde y fondo
        //"border-input",                        Aplica el estilo de borde para el campo de entrada
        "data-[placeholder]:text-muted-foreground",  // Estilo para texto en el placeholder (color atenuado)
        "[&_svg:not([class*='text-'])]:text-muted-foreground",  // Los íconos SVG (sin clase 'text-') tendrán color atenuado
        //"focus-visible:border-ring",          // Borde visible en enfoque
        "focus-visible:ring-ring/50",         // Anillo de enfoque con opacidad del 50%
      
        // Estilos para el estado de invalidación
        "aria-invalid:ring-destructive/20",  // Anillo de color destructivo (rojo) con opacidad del 20% cuando es inválido
        "dark:aria-invalid:ring-destructive/40",  // En modo oscuro, el anillo destructivo tiene 40% opacidad si es inválido
        "aria-invalid:border-destructive",   // Cambia el borde a destructivo (rojo) si el campo es inválido
      
        // Modo oscuro (Dark mode)
        "dark:bg-input/30",                  // Fondo tenue (30% opacidad) en modo oscuro
        "dark:hover:bg-input/50",            // Fondo con 50% opacidad al pasar el cursor en modo oscuro
      
        // Flexbox para la disposición de elementos
        "flex",                              // Uso de Flexbox para la disposición de los elementos hijos
        "items-center",                       // Centra los elementos hijos verticalmente
        "justify-between",                    // Distribuye los elementos con espacio entre ellos
        "gap-2",                              // Aplica un espacio de 2 unidades entre los elementos hijos
      
        // Estilos adicionales
        //"border-none",                        // Elimina cualquier borde predeterminado
        //"border",                             // Aplica un borde alrededor del campo
        "bg-transparent",                     // Establece el fondo como transparente
        //"px-3 py-2",                          // Relleno horizontal (3) y vertical (2)
        "whitespace-nowrap",                  // Impide que el contenido se divida en varias líneas
        //"shadow-xs",                          // Aplica una sombra pequeña al campo
        "outline-none",                       // Elimina el contorno del campo cuando está enfocado
      
        // Estilo cuando el campo está enfocado
        "focus-visible:ring-[3px]",           // Aplica un anillo de enfoque con 3 píxeles de grosor
      
        // Estado de deshabilitado
        "disabled:cursor-not-allowed",        // Cambia el cursor a "no permitido" cuando el campo está deshabilitado
        "disabled:opacity-50",                // Reduce la opacidad al 50% cuando el campo está deshabilitado
      
        // Estilos de tamaño basado en atributos
        "data-[size=default]:h-9",            // Si `data-size="default"` está presente, la altura será de 9 unidades
        "data-[size=sm]:h-8",                 // Si `data-size="sm"` está presente, la altura será de 8 unidades
      
        // Estilos para elementos dentro del select o con datos especiales
        "*:data-[slot=select-value]:line-clamp-1",  // Limita el texto de los elementos hijos a una sola línea
        "*:data-[slot=select-value]:flex",         // Hace que los elementos con `data-slot="select-value"` usen Flexbox
        "*:data-[slot=select-value]:items-center", // Centra verticalmente los elementos con `data-slot="select-value"`
        "*:data-[slot=select-value]:gap-2",        // Aplica un espacio de 2 unidades entre los elementos dentro de `data-slot="select-value"`
      
        // Estilos específicos para SVGs dentro del componente
        "[&_svg]:pointer-events-none",          // Los íconos SVG no interceptan los clics ni eventos del ratón
        "[&_svg]:shrink-0",                     // Los SVGs no se reducirán dentro de un contenedor flexible
        "[&_svg:not([class*='size-'])]:size-4",  // Si un SVG no tiene una clase que contenga 'size-', se le aplica un tamaño de 4 unidades
        
        // Clases adicionales si las hay
        className
      )}
      
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto ",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
