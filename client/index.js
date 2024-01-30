const Lib = global.exports['tk-lib'].GetLib();
const Logger = Lib.Functions.Logger(GetCurrentResourceName(), "Main");

let IsRagdolled = false;
let TickTimer = null;

function Ragdoll_On() {
	TickTimer = setTick(() => {
		if (IsRagdolled) return SetPedToRagdoll(GetPlayerPed(-1), 1000, 1000, 0, 0, 0, 0)
	})
	IsRagdolled = true;
	SendNUIMessage({
		module: GetCurrentResourceName(),
		action: "SHOW_UI",
	});
	Logger.debug("Ragdoll set to Enabled")
}

function Ragdoll_Off() {
	clearTick(TickTimer);
	TickTimer = null;
	IsRagdolled = false;
	SendNUIMessage({
		module: GetCurrentResourceName(),
		action: "HIDE_UI",
	});
	Logger.debug("Ragdoll set to Disabled")
}

function SetRagdoll(Ragdoll) {
	if (Ragdoll && !IsRagdolled) return Ragdoll_On();
	if (!Ragdoll && IsRagdolled) return Ragdoll_Off();
	Logger.debug(`Ragdoll is already in the ${Ragdoll ? 'Ragdolled' : 'Not Ragdolled'} State.`)
}

exports("SetRagdoll", SetRagdoll);

RegisterCommand("rag", () => {
	if (IsRagdolled) return SetRagdoll(false);
	return SetRagdoll(true);
});

RegisterKeyMapping('rag', 'Toggle Character Ragdoll', 'keyboard', '');
Logger.log("TK-Ragdoll Loaded");