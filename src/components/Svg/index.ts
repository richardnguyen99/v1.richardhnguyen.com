/**
 * Index file for <SVG /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import CommitIcon from "./Commit";
import GithubIcon from "./Github";
import RSSIcon from "./RSS";
import SunIcon from "./Sun";
import PathIcon from "./Path";
import Hey from "./Hey";
import AlertCheckmark from "./AlertCheckmark";
import AlertInfo from "./AlertInfo";
import AlertWarning from "./AlertWarning";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const exported = Object.assign("SVG", {
  Github: GithubIcon,
  RSS: RSSIcon,
  Sun: SunIcon,
  Commit: CommitIcon,
  Path: PathIcon,
  Hey,
  AlertCheckmark,
  AlertInfo,
  AlertWarning,
  ArrowRight,
  ArrowLeft,
});

export default exported;
