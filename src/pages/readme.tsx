/* eslint-disable react/no-unescaped-entities */
/**
 * Index page (/about)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Layout from "@components/Layout";
import Typography from "@components/Typography";

const ReadmePage: React.FC = () => {
  return (
    <Layout.Page className="bg-gray-7" title="README">
      <Typography.HeroHeadline>
        <Typography.UnderlineText color="red">README</Typography.UnderlineText>{" "}
        Richard
      </Typography.HeroHeadline>
      <h3>Hedonist Roots</h3>

      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.”
      </p>

      <p>As Cicero would put it, “Um, not so fast.”</p>

      <p>
        The placeholder text, beginning with the line “Lorem ipsum dolor sit
        amet, consectetur adipiscing elit”, looks like Latin because in its
        youth, centuries ago, it was Latin.
      </p>

      <p>
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is
        credited with discovering the source behind the ubiquitous filler text.
        In seeing a sample of lorem ipsum, his interest was piqued by
        consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
        dictionary led McClintock to a passage from De Finibus Bonorum et
        Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text
        from the Roman philosopher Cicero.
      </p>

      <p>
        In particular, the garbled words of lorem ipsum bear an unmistakable
        resemblance to sections 1.10.32–33 of Cicero's work, with the most
        notable passage excerpted below:
      </p>

      <blockquote>
        “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
      </blockquote>

      <p>A 1914 English translation by Harris Rackham reads:</p>

      <blockquote>
        “Nor is there anyone who loves or pursues or desires to obtain pain of
        itself, because it is pain, but occasionally circumstances occur in
        which toil and pain can procure him some great pleasure.”
      </blockquote>

      <p>
        McClintock's eye for detail certainly helped narrow the whereabouts of
        lorem ipsum's origin, however, the “how and when” still remain something
        of a mystery, with competing theories and timelines.
      </p>

      <h3>Remixing a Classic</h3>

      <p>
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's
        De Finibus in order to provide placeholder text to mockup various fonts
        for a type specimen book.
      </p>

      <p>
        It's difficult to find examples of lorem ipsum in use before Letraset
        made it popular as a dummy text in the 1960s, although McClintock says
        he remembers coming across the lorem ipsum passage in a book of old
        metal type samples. So far he hasn't relocated where he once saw the
        passage, but the popularity of Cicero in the 15th century supports the
        theory that the filler text has been used for centuries.
      </p>

      <p>
        And anyways, as Cecil Adams reasoned, “[Do you really] think graphic
        arts supply houses were hiring classics scholars in the 1960s?” Perhaps.
        But it seems reasonable to imagine that there was a version in use far
        before the age of Letraset.
      </p>

      <p>McClintock wrote to Before & After to explain his discovery;</p>

      <blockquote>
        “What I find remarkable is that this text has been the industry's
        standard dummy text ever since some printer in the 1500s took a galley
        of type and scrambled it to make a type specimen book; it has survived
        not only four centuries of letter-by-letter resetting but even the leap
        into electronic typesetting, essentially unchanged except for an
        occasional 'ing' or 'y' thrown in. It's ironic that when the
        then-understood Latin was scrambled, it became as incomprehensible as
        Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic
        roots!” (The editors published his letter in a correction headlined
        “Lorem Oopsum”).
      </blockquote>

      <p>
        As an alternative theory, (and because Latin scholars do this sort of
        thing) someone tracked down a 1914 Latin edition of De Finibus which
        challenges McClintock's 15th century claims and suggests that the dawn
        of lorem ipsum was as recent as the 20th century. The 1914 Loeb
        Classical Library Edition ran out of room on page 34 for the Latin
        phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase
        leaves one page dangling with “do-”, while another begins with the now
        ubiquitous “lorem ipsum”.
      </p>

      <p>
        Whether a medieval typesetter chose to garble a well-known (but
        non-Biblical—that would have been sacrilegious) text, or whether a quirk
        in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an
        odd way for Cicero to sail into the 21st century.
      </p>
    </Layout.Page>
  );
};

export default ReadmePage;
