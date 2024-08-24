import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  type: "year" | "month";
  placeHolder: string;
  initialValue: "";
  data: [{}, {}];
};

export const SelectDate = ({
  type,
  placeHolder,
  initialValue,
  data,
}: Props) => {
  return (
    <Select>
      <SelectTrigger className="max-w-[180px] flex-row-reverse">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((date) => (
          <SelectItem value="light">2024</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
