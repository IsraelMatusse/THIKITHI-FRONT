import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { ImSearch } from "react-icons/im";
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search" className="w-full rounded-md" />
      <Button type="submit">
        <ImSearch />
      </Button>
    </div>
  );
}
