/**
 * Index file for <Select /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Select from "./Select";
import { StyledSelectForm } from "./style";

const exported = Object.assign(Select, {
  Form: StyledSelectForm,
});

export default exported;
