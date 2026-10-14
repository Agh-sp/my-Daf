import { PlayerInfo, PlayerType } from "@openfront/engine-api/game/GameTypes";
import { NationExecution } from "@openfront/engine/execution/NationExecution";
import { setup } from "./util/Setup";

describe("NationExecution peace requests", () => {
  async function setupDefeatedNation(troops: number) {
    const game = await setup("big_plains");
    game.addPlayer(
      new PlayerInfo("nation", PlayerType.Nation, null, "nation_id"),
    );
    game.addPlayer(
      new PlayerInfo("attacker", PlayerType.Human, null, "attacker_id"),
    );

    const nation = game.player("nation_id");
    const attacker = game.player("attacker_id");
    nation.setTroops(troops);

    const requestPeace = vi.fn();
    const execution = Object.create(NationExecution.prototype) as any;
    Object.assign(execution, {
      peakTroops: 1_000,
      player: nation,
      attackBehavior: {
        findIncomingAttackPlayer: () => null,
        warTargetPlayer: () => attacker,
      },
      allianceBehavior: { requestPeace },
    });

    return { execution, attacker, requestPeace };
  }

  it("requests peace from the remembered attacker after losing over 90% of its troops", async () => {
    const { execution, attacker, requestPeace } = await setupDefeatedNation(99);

    execution.requestPeaceIfDefeated();

    expect(requestPeace).toHaveBeenCalledOnce();
    expect(requestPeace).toHaveBeenCalledWith(attacker);
  });

  it("does not request peace at exactly 90% troop loss", async () => {
    const { execution, requestPeace } = await setupDefeatedNation(100);

    execution.requestPeaceIfDefeated();

    expect(requestPeace).not.toHaveBeenCalled();
  });
});
