import * as Iconsax from "iconsax-react-native";
export type IconName = Exclude<keyof typeof Iconsax, "Icon" | "IconProps">;

interface IconSaxProps {
    name: IconName
    size?: number
    color?: string
    variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone"
}

const IconSax = ({ name, size, color, variant }: IconSaxProps) => {
    const Icon = Iconsax[name];
  return (
    <Icon size={size} color={color} variant={variant} />
  )
}

export default IconSax