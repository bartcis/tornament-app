import { Modal } from "@/components/modal";
import { Game } from "@/models/tournament";
import { ROUTES } from "@/utils/route-definition";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
  game: Game;
};
export const NewVotingModal = ({ onClose, onConfirm, game }: Props) => {
  return (
    <Modal
      primaryText="Rozpocznij głosowanie"
      secondaryText="Wróć"
      secondaryAction={onClose}
      primaryAction={onConfirm}
      title={"Za chwile rozpocznie się nowe głosowanie"}
      description={`W tym głosowaniu zmierzą się ${game.playerOne} i ${game.playerTwo}. Po rozpoczęciu powiedz publiczności, aby odświezyli stronę z głosowaniem`}
    />
  );
};
