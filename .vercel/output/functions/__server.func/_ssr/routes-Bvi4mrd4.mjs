import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as ChevronDown, D as Box, E as Building2, O as Bell, S as ChevronRight, T as Camera, _ as HardDrive, a as Square, b as Ellipsis, c as Search, d as Plus, f as Play, g as Keyboard, h as Menu, i as Trash2, l as RotateCcw, m as Network, n as User, o as Shrink, p as Pause, s as Server, t as X, u as Power, v as Folder, w as Check, x as Copy, y as Expand } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Portal2, c as SubContent2, i as ItemIndicator2, l as SubTrigger2, n as Content2, o as Root2, r as Item2, s as Separator2, t as CheckboxItem2, u as Trigger } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as SelectItemIndicator, c as SelectTrigger$1, i as SelectItem$1, l as SelectValue$1, n as SelectContent$1, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as formatClock, c as shortId, i as formatBytesGb, n as clamp, o as formatMemoryMb, r as cn, s as formatUptime } from "./router-DLKNFldE.mjs";
import { n as nn, r as qt, t as Qt } from "../_libs/react-resizable-panels.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as Root$2 } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger$1, n as List, r as Root2$1, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bvi4mrd4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-card p-5 shadow-elevated", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-sm p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-6", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-base font-semibold", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function idleConsole(vm) {
	if (vm.family === "windows") return [
		"",
		vm.guestOs.includes("2022") ? "Windows Server 2022 Standard" : "Windows 11 Pro",
		"Aether Guest Tools 13.0.2  —  running",
		"",
		`C:\\Users\\Administrator>`
	];
	if (vm.family === "other") return [
		"",
		`FreeBSD/amd64 ( ${vm.name} ) (ttyv0)`,
		"",
		`root@${vm.name}:~ # `
	];
	return [
		"",
		`${vm.name} ttyS0`,
		"",
		`root@${vm.name}:~# `
	];
}
function getBootSequence(vm) {
	if (vm.family === "windows") return [
		{
			delay: 40,
			line: "PhoenixBIOS 4.0 Release 6.0  Copyright 1985-2024"
		},
		{
			delay: 90,
			line: `CPU = ${vm.cpu} Cores    ${vm.memoryMb} MB Memory`
		},
		{
			delay: 220,
			line: `Memory Test : ${vm.memoryMb}M OK`
		},
		{
			delay: 180,
			line: ""
		},
		{
			delay: 200,
			line: "Aether SeaBIOS (version 1.16.3)"
		},
		{
			delay: 280,
			line: "Booting from Hard Disk..."
		},
		{
			delay: 420,
			line: ""
		},
		{
			delay: 80,
			line: "Starting Windows..."
		},
		{
			delay: 520,
			line: ""
		},
		{
			delay: 200,
			line: vm.guestOs.includes("2022") ? "Windows Server 2022 Standard" : "Windows 11 Pro"
		},
		{
			delay: 240,
			line: ""
		},
		{
			delay: 180,
			line: "Aether Guest Tools 13.0.2  —  running"
		},
		{
			delay: 160,
			line: ""
		},
		{
			delay: 80,
			line: `C:\\Users\\Administrator>`
		}
	];
	const pretty = vm.guestOs.startsWith("Ubuntu") ? "Ubuntu 24.04.2 LTS" : vm.guestOs.startsWith("Debian") ? "Debian GNU/Linux 12" : vm.guestOs.startsWith("Alma") ? "AlmaLinux 9.4" : vm.guestOs.startsWith("FreeBSD") ? "FreeBSD 14.1-RELEASE" : "Linux";
	if (vm.family === "other") return [
		{
			delay: 40,
			line: "Aether SeaBIOS (version 1.16.3)"
		},
		{
			delay: 180,
			line: `Memory Test : ${vm.memoryMb}M OK`
		},
		{
			delay: 240,
			line: "Booting from Hard Disk..."
		},
		{
			delay: 380,
			line: ""
		},
		{
			delay: 120,
			line: `${pretty}`
		},
		{
			delay: 200,
			line: ""
		},
		{
			delay: 100,
			line: `FreeBSD/amd64 ( ${vm.name} ) (ttyv0)`
		},
		{
			delay: 140,
			line: ""
		},
		{
			delay: 80,
			line: `${vm.name} login: `
		}
	];
	return [
		{
			delay: 30,
			line: "PhoenixBIOS 4.0 Release 6.0  Copyright 1985-2024 Phoenix Technologies Ltd."
		},
		{
			delay: 80,
			line: `CPU = ${vm.cpu} Cores`
		},
		{
			delay: 180,
			line: `Memory Test : ${vm.memoryMb}M OK`
		},
		{
			delay: 120,
			line: ""
		},
		{
			delay: 160,
			line: "Aether SeaBIOS (version 1.16.3-aether)"
		},
		{
			delay: 220,
			line: "Booting from Hard Disk..."
		},
		{
			delay: 280,
			line: ""
		},
		{
			delay: 90,
			line: `Loading ${pretty} ...`
		},
		{
			delay: 200,
			line: `[    0.000000] Linux version 6.8.0-40-generic (build@aether)`
		},
		{
			delay: 70,
			line: `[    0.000000] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 ro`
		},
		{
			delay: 80,
			line: `[    0.142211] ACPI: Early table checksum verification disabled`
		},
		{
			delay: 90,
			line: `[    0.401882] smpboot: CPU0: Aether Virtual CPU @ 2.50GHz`
		},
		{
			delay: 70,
			line: `[    0.882104] pci 0000:00:0f.0: [15ad:0405] type 00 class 0x030000`
		},
		{
			delay: 80,
			line: `[    1.204441] scsi 0:0:0:0: Direct-Access     Aether   Virtual disk    1.0`
		},
		{
			delay: 90,
			line: `[    1.551002] vmxnet3 0000:03:00.0 eth0: NIC Link is Up 10000 Mbps`
		},
		{
			delay: 110,
			line: `[  OK  ] Started Journal Service.`
		},
		{
			delay: 80,
			line: `[  OK  ] Reached target Network.`
		},
		{
			delay: 70,
			line: `[  OK  ] Started OpenSSH server daemon.`
		},
		{
			delay: 90,
			line: `[  OK  ] Started Aether Guest Tools.`
		},
		{
			delay: 140,
			line: ""
		},
		{
			delay: 80,
			line: `${pretty}`
		},
		{
			delay: 40,
			line: `${vm.name} ttyS0`
		},
		{
			delay: 60,
			line: ""
		},
		{
			delay: 50,
			line: `${vm.name} login: `
		}
	];
}
function prompt(vm) {
	if (vm.family === "windows") return `C:\\Users\\Administrator>`;
	if (vm.family === "other") return `root@${vm.name}:~ # `;
	return `root@${vm.name}:~# `;
}
function runCommand(vm, raw) {
	const cmd = raw.trim();
	const p = prompt(vm);
	const out = [];
	if (vm.family === "windows") {
		out.push(`${p}${raw}`);
		if (!cmd) return out;
		const c = cmd.toLowerCase();
		if (c === "help") out.push("dir  ipconfig  hostname  whoami  ver  systeminfo  cls  reboot");
		else if (c === "cls") return ["__CLEAR__"];
		else if (c === "dir") {
			out.push(" Volume in drive C is System");
			out.push(" Directory of C:\\Users\\Administrator");
			out.push("");
			out.push("04/12/2026  09:14    <DIR>          Desktop");
			out.push("04/12/2026  09:14    <DIR>          Documents");
			out.push("08/02/2026  11:02            2,148  notes.txt");
		} else if (c === "ipconfig") {
			out.push("Ethernet adapter Ethernet0:");
			out.push("");
			out.push("   IPv4 Address. . . . . . . . . . . : " + (vm.ip ?? "unassigned"));
			out.push("   Subnet Mask . . . . . . . . . . . : 255.255.255.0");
			out.push("   Default Gateway . . . . . . . . . : 10.20.30.1");
		} else if (c === "hostname") out.push(vm.name);
		else if (c === "whoami") out.push("aether\\administrator");
		else if (c === "ver") out.push(vm.guestOs.includes("2022") ? "Microsoft Windows [Version 10.0.20348.2400]" : "Microsoft Windows [Version 10.0.22631.3880]");
		else if (c === "systeminfo") {
			out.push(`Host Name:                 ${vm.name.toUpperCase()}`);
			out.push(`OS Name:                   ${vm.guestOs}`);
			out.push(`System Type:               x64-based PC`);
			out.push(`Total Physical Memory:     ${vm.memoryMb} MB`);
			out.push(`Processor(s):              ${vm.cpu} Processor(s) Installed.`);
		} else if (c === "reboot" || c === "shutdown /r") {
			out.push("Shutting down...");
			out.push("__RESET__");
		} else {
			out.push(`'${cmd}' is not recognized as an internal or external command,`);
			out.push("operable program or batch file.");
		}
		out.push(p);
		return out;
	}
	out.push(`${p}${raw}`);
	if (!cmd) return out;
	const [bin, ...rest] = cmd.split(/\s+/);
	const arg = rest.join(" ");
	if (bin === "clear" || bin === "cls") return ["__CLEAR__"];
	if (bin === "help") out.push("ls  uname  hostname  ip  df  free  whoami  cat  top  uptime  ping  reboot  clear");
	else if (bin === "ls") {
		out.push("bin   dev  home  lib   opt   root  sbin  tmp  usr  var");
		out.push("boot  etc  mnt   media proc  run   srv   sys");
	} else if (bin === "uname") out.push(arg.includes("-") ? `Linux ${vm.name} 6.8.0-40-generic #40-Aether SMP x86_64 GNU/Linux` : "Linux");
	else if (bin === "hostname") out.push(vm.name);
	else if (bin === "whoami") out.push("root");
	else if (bin === "ip" || bin === "ifconfig") {
		out.push("1: lo: <LOOPBACK,UP> mtu 65536");
		out.push("    inet 127.0.0.1/8");
		out.push("2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500");
		out.push(`    inet ${vm.ip ?? "0.0.0.0"}/24 brd 10.20.30.255`);
		out.push(`    ether ${vm.mac} txqueuelen 1000`);
	} else if (bin === "df") {
		out.push("Filesystem      Size  Used Avail Use% Mounted on");
		out.push(`/dev/sda1        ${vm.diskGb}G   ${Math.round(vm.diskGb * .42)}G   ${Math.round(vm.diskGb * .58)}G  42% /`);
	} else if (bin === "free") {
		const tot = vm.memoryMb;
		const used = Math.round(tot * (vm.memUsage / 100));
		out.push("               total        used        free      shared  buff/cache   available");
		out.push(`Mem:         ${String(tot).padStart(8)}    ${String(used).padStart(8)}    ${String(tot - used).padStart(8)}         4      1024      ${tot - used}`);
	} else if (bin === "cat") {
		if (arg.includes("os-release")) {
			out.push(`PRETTY_NAME="${vm.guestOs}"`);
			out.push(`HOME_URL="https://aether.lab"`);
		} else if (arg.includes("hostname")) out.push(vm.name);
		else out.push(`cat: ${arg || "—"}: No such file or directory`);
	} else if (bin === "top" || bin === "htop") {
		out.push(`top - load average: ${(vm.cpuUsage / 40).toFixed(2)}, ${(vm.cpuUsage / 55).toFixed(2)}, ${(vm.cpuUsage / 70).toFixed(2)}`);
		out.push(`Tasks: 128 total,   1 running, 127 sleeping`);
		out.push(`%Cpu(s): ${vm.cpuUsage.toFixed(1)} us,  2.1 sy,  0.0 ni`);
		out.push(`MiB Mem : ${vm.memoryMb} total, ${Math.round(vm.memoryMb * (1 - vm.memUsage / 100))} free`);
		out.push("");
		out.push("  PID USER      PR  NI    VIRT    RES  %CPU %MEM COMMAND");
		out.push("    1 root      20   0  167832  12840   0.0  0.2 systemd");
		out.push("  412 root      20   0   12004   4312   0.2  0.1 sshd");
		out.push("  880 root      20   0   98440  22116   1.4  0.4 guest-tools");
	} else if (bin === "uptime") {
		const d = Math.floor(vm.uptimeSec / 86400);
		const h = Math.floor(vm.uptimeSec % 86400 / 3600);
		out.push(` ${d} days, ${h} hours,  load average: ${(vm.cpuUsage / 40).toFixed(2)}`);
	} else if (bin === "ping") {
		const target = rest[0] ?? "10.20.30.1";
		out.push(`PING ${target} ( ${target} ) 56(84) bytes of data.`);
		out.push(`64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.31 ms`);
		out.push(`64 bytes from ${target}: icmp_seq=2 ttl=64 time=0.28 ms`);
		out.push(`--- ${target} ping statistics ---`);
		out.push(`2 packets transmitted, 2 received, 0% packet loss`);
	} else if (bin === "reboot" || bin === "shutdown") {
		out.push("Rebooting...");
		out.push("__RESET__");
	} else out.push(`-bash: ${bin}: command not found`);
	out.push(p);
	return out;
}
function assignedIp(existing) {
	const used = new Set(existing.filter(Boolean));
	for (let i = 80; i < 250; i++) {
		const ip = `10.20.30.${i}`;
		if (!used.has(ip)) return ip;
	}
	return `10.20.30.${100 + existing.length % 50}`;
}
function poweredOffConsole(name) {
	return [
		"",
		`  ${name} is powered off.`,
		"  Use Power On from the toolbar to start this virtual machine.",
		""
	];
}
function suspendedOverlay() {
	return "Suspended — memory state preserved on datastore.";
}
function hist(base) {
	return Array.from({ length: 24 }, (_, i) => {
		const n = base + Math.sin(i / 2.4) * 7 + Math.cos(i / 5) * 3;
		return Math.round(Math.min(96, Math.max(4, n)));
	});
}
var DATACENTER_NAME = "Aether Datacenter";
var VCENTER_HOST = "vcenter.aether.lab";
var clusters = [{
	id: "cl-prod",
	name: "Production",
	ha: true,
	drs: true
}, {
	id: "cl-lab",
	name: "Lab",
	ha: false,
	drs: true
}];
var hosts = [
	{
		id: "h1",
		name: "esx-prod-01.aether.lab",
		clusterId: "cl-prod",
		cpuCores: 64,
		cpuMhz: 2500,
		memoryGb: 512,
		version: "Aether ESX 8.0 U3",
		state: "connected",
		cpuUsage: 41,
		memUsage: 62,
		cpuHistory: hist(41),
		memHistory: hist(62),
		uptimeSec: 4082400,
		model: "Dell PowerEdge R760"
	},
	{
		id: "h2",
		name: "esx-prod-02.aether.lab",
		clusterId: "cl-prod",
		cpuCores: 64,
		cpuMhz: 2500,
		memoryGb: 512,
		version: "Aether ESX 8.0 U3",
		state: "connected",
		cpuUsage: 36,
		memUsage: 54,
		cpuHistory: hist(36),
		memHistory: hist(54),
		uptimeSec: 4075200,
		model: "Dell PowerEdge R760"
	},
	{
		id: "h3",
		name: "esx-prod-03.aether.lab",
		clusterId: "cl-prod",
		cpuCores: 48,
		cpuMhz: 2400,
		memoryGb: 384,
		version: "Aether ESX 8.0 U3",
		state: "connected",
		cpuUsage: 22,
		memUsage: 38,
		cpuHistory: hist(22),
		memHistory: hist(38),
		uptimeSec: 1594800,
		model: "HPE ProLiant DL380 Gen11"
	},
	{
		id: "h4",
		name: "esx-lab-01.aether.lab",
		clusterId: "cl-lab",
		cpuCores: 32,
		cpuMhz: 2300,
		memoryGb: 256,
		version: "Aether ESX 8.0 U2",
		state: "connected",
		cpuUsage: 14,
		memUsage: 29,
		cpuHistory: hist(14),
		memHistory: hist(29),
		uptimeSec: 784800,
		model: "Supermicro SYS-120U"
	}
];
var datastores = [
	{
		id: "ds-vsan",
		name: "vsanDatastore",
		type: "AetherFS",
		capacityGb: 49152,
		usedGb: 31200
	},
	{
		id: "ds-nfs",
		name: "nfs-backup",
		type: "NFS",
		capacityGb: 20480,
		usedGb: 8192
	},
	{
		id: "ds-lab",
		name: "local-nvme-lab",
		type: "VMFS",
		capacityGb: 4096,
		usedGb: 1280
	}
];
var networks = [
	{
		id: "net-mgmt",
		name: "Management Network",
		type: "portgroup",
		vlan: 10,
		vswitch: "vSwitch0"
	},
	{
		id: "net-vm",
		name: "VM Network",
		type: "distributed",
		vlan: 20,
		vswitch: "dvSwitch-Prod"
	},
	{
		id: "net-stor",
		name: "Storage Network",
		type: "distributed",
		vlan: 30,
		vswitch: "dvSwitch-Prod"
	},
	{
		id: "net-dmz",
		name: "DMZ",
		type: "distributed",
		vlan: 40,
		vswitch: "dvSwitch-Edge"
	},
	{
		id: "net-vmotion",
		name: "vMotion",
		type: "distributed",
		vlan: 50,
		vswitch: "dvSwitch-Prod"
	}
];
function vm(partial) {
	const cpuUsage = partial.cpuUsage ?? 0;
	const memUsage = partial.memUsage ?? 0;
	return {
		hardwareVersion: "AHW 21",
		snapshots: partial.snapshots ?? [],
		currentSnapshotId: partial.currentSnapshotId ?? null,
		consoleLines: partial.consoleLines ?? (partial.state === "poweredOn" || partial.state === "suspended" ? idleConsole(partial) : []),
		booted: partial.state === "poweredOn",
		mac: partial.mac ?? `00:50:56:a${partial.id.length}:${partial.id.slice(0, 2)}:${partial.id.slice(-2)}`,
		cpuHistory: partial.cpuHistory ?? hist(cpuUsage || 8),
		memHistory: partial.memHistory ?? hist(memUsage || 20),
		...partial
	};
}
var vms = [
	vm({
		id: "vm-web-01",
		name: "web-frontend-01",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h1",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 80,
		state: "poweredOn",
		ip: "10.20.30.11",
		tools: "running",
		cpuUsage: 38,
		memUsage: 54,
		uptimeSec: 1047600,
		notes: "Primary nginx edge. Keep at N+1 with web-frontend-02.",
		folder: "Production",
		mac: "00:50:56:a1:1b:11"
	}),
	vm({
		id: "vm-web-02",
		name: "web-frontend-02",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h1",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 80,
		state: "poweredOn",
		ip: "10.20.30.12",
		tools: "running",
		cpuUsage: 29,
		memUsage: 48,
		uptimeSec: 1047600,
		notes: "Secondary nginx edge.",
		folder: "Production",
		mac: "00:50:56:a1:1b:12"
	}),
	vm({
		id: "vm-db-01",
		name: "db-postgres-01",
		guestOs: "AlmaLinux 9 (64-bit)",
		family: "linux",
		hostId: "h1",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 8,
		memoryMb: 32768,
		diskGb: 500,
		state: "poweredOn",
		ip: "10.20.30.40",
		tools: "running",
		cpuUsage: 61,
		memUsage: 78,
		uptimeSec: 3456e3,
		notes: "Primary Postgres 16. Snapshots nightly via backup job.",
		folder: "Production",
		mac: "00:50:56:a1:40:01",
		snapshots: [{
			id: "sn-db-1",
			name: "pre-16.4-upgrade",
			description: "Taken before minor upgrade",
			createdAt: Date.UTC(2026, 7, 12, 2, 0),
			parentId: null
		}, {
			id: "sn-db-2",
			name: "post-upgrade-ok",
			description: "Verified 16.4",
			createdAt: Date.UTC(2026, 7, 12, 4, 30),
			parentId: "sn-db-1"
		}],
		currentSnapshotId: "sn-db-2"
	}),
	vm({
		id: "vm-k8s-cp",
		name: "k8s-control-01",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h2",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 60,
		state: "poweredOn",
		ip: "10.20.30.50",
		tools: "running",
		cpuUsage: 22,
		memUsage: 61,
		uptimeSec: 1814400,
		notes: "Kubernetes control plane.",
		folder: "Production",
		mac: "00:50:56:a2:50:01"
	}),
	vm({
		id: "vm-k8s-w1",
		name: "k8s-worker-01",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h2",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 8,
		memoryMb: 16384,
		diskGb: 120,
		state: "poweredOn",
		ip: "10.20.30.51",
		tools: "running",
		cpuUsage: 47,
		memUsage: 66,
		uptimeSec: 1814400,
		notes: "",
		folder: "Production",
		mac: "00:50:56:a2:50:11"
	}),
	vm({
		id: "vm-k8s-w2",
		name: "k8s-worker-02",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h2",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 8,
		memoryMb: 16384,
		diskGb: 120,
		state: "poweredOn",
		ip: "10.20.30.52",
		tools: "running",
		cpuUsage: 33,
		memUsage: 58,
		uptimeSec: 1814400,
		notes: "",
		folder: "Production",
		mac: "00:50:56:a2:50:12"
	}),
	vm({
		id: "vm-win-dc",
		name: "win-dc-01",
		guestOs: "Microsoft Windows Server 2022 (64-bit)",
		family: "windows",
		hostId: "h3",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 100,
		state: "poweredOn",
		ip: "10.20.30.10",
		tools: "running",
		cpuUsage: 12,
		memUsage: 44,
		uptimeSec: 5184e3,
		notes: "Domain controller. Do not snapshot while SYSVOL is busy.",
		folder: "Production",
		mac: "00:50:56:a3:10:01"
	}),
	vm({
		id: "vm-gitlab",
		name: "gitlab-01",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h3",
		clusterId: "cl-prod",
		datastoreId: "ds-vsan",
		networkId: "net-vm",
		cpu: 8,
		memoryMb: 16384,
		diskGb: 400,
		state: "suspended",
		ip: "10.20.30.70",
		tools: "notRunning",
		cpuUsage: 0,
		memUsage: 0,
		uptimeSec: 0,
		notes: "Suspended after weekend cutover. Resume Monday.",
		folder: "Production",
		mac: "00:50:56:a3:70:01",
		snapshots: [
			{
				id: "sn-gl-1",
				name: "before-16.11",
				description: "",
				createdAt: Date.UTC(2026, 6, 2, 22, 0),
				parentId: null
			},
			{
				id: "sn-gl-2",
				name: "weekend-freeze",
				description: "Memory snapshot",
				createdAt: Date.UTC(2026, 8, 1, 18, 0),
				parentId: "sn-gl-1"
			},
			{
				id: "sn-gl-3",
				name: "post-restore-test",
				description: "",
				createdAt: Date.UTC(2026, 8, 2, 9, 12),
				parentId: "sn-gl-1"
			}
		],
		currentSnapshotId: "sn-gl-2"
	}),
	vm({
		id: "vm-jump",
		name: "jumpbox",
		guestOs: "Ubuntu Linux (64-bit)",
		family: "linux",
		hostId: "h4",
		clusterId: "cl-lab",
		datastoreId: "ds-lab",
		networkId: "net-mgmt",
		cpu: 2,
		memoryMb: 2048,
		diskGb: 32,
		state: "poweredOn",
		ip: "10.10.10.20",
		tools: "running",
		cpuUsage: 6,
		memUsage: 31,
		uptimeSec: 345600,
		notes: "Bastion. MFA required.",
		folder: "Lab",
		mac: "00:50:56:b4:10:20"
	}),
	vm({
		id: "vm-fw",
		name: "edge-fw-01",
		guestOs: "FreeBSD 14 (64-bit)",
		family: "other",
		hostId: "h4",
		clusterId: "cl-lab",
		datastoreId: "ds-lab",
		networkId: "net-dmz",
		cpu: 2,
		memoryMb: 4096,
		diskGb: 16,
		state: "poweredOn",
		ip: "10.40.1.1",
		tools: "running",
		cpuUsage: 9,
		memUsage: 22,
		uptimeSec: 777600,
		notes: "Lab edge firewall.",
		folder: "Lab",
		mac: "00:50:56:b4:40:01"
	}),
	vm({
		id: "vm-alpine",
		name: "alpine-test",
		guestOs: "Other 3.x or later Linux (64-bit)",
		family: "linux",
		hostId: "h4",
		clusterId: "cl-lab",
		datastoreId: "ds-lab",
		networkId: "net-vm",
		cpu: 1,
		memoryMb: 1024,
		diskGb: 8,
		state: "poweredOff",
		ip: null,
		tools: "notRunning",
		cpuUsage: 0,
		memUsage: 0,
		uptimeSec: 0,
		notes: "Scratch VM for ISO tests.",
		folder: "Lab",
		mac: "00:50:56:b4:00:08"
	}),
	vm({
		id: "vm-win-dev",
		name: "win-dev-01",
		guestOs: "Microsoft Windows 11 (64-bit)",
		family: "windows",
		hostId: "h4",
		clusterId: "cl-lab",
		datastoreId: "ds-lab",
		networkId: "net-vm",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 80,
		state: "poweredOff",
		ip: null,
		tools: "notInstalled",
		cpuUsage: 0,
		memUsage: 0,
		uptimeSec: 0,
		notes: "Developer desktop pool seed.",
		folder: "Lab",
		mac: "00:50:56:b4:11:01"
	})
];
var seedAlerts = [
	{
		id: "al-1",
		level: "warning",
		title: "vsanDatastore space",
		body: "Capacity used is 63%. Consider adding a disk group before 75%.",
		objectId: "ds-vsan",
		objectKind: "datastore"
	},
	{
		id: "al-2",
		level: "info",
		title: "gitlab-01 suspended",
		body: "Virtual machine has been suspended for 2 days. Resume or power off to free host memory.",
		objectId: "vm-gitlab",
		objectKind: "vm"
	},
	{
		id: "al-3",
		level: "warning",
		title: "Snapshot chain on gitlab-01",
		body: "3 snapshots present. Long chains slow storage and complicate backup.",
		objectId: "vm-gitlab",
		objectKind: "vm"
	}
];
var defaultExpanded = {
	dc: true,
	"cl-prod": true,
	"cl-lab": true,
	h1: true,
	h2: true,
	h3: false,
	h4: true,
	folders: true,
	"folder-Production": true,
	"folder-Lab": true
};
var timers = /* @__PURE__ */ new Map();
function clearTimers(key) {
	const list = timers.get(key);
	if (!list) return;
	for (const t of list) window.clearTimeout(t);
	timers.delete(key);
}
function later(key, ms, fn) {
	const id = window.setTimeout(fn, ms);
	const list = timers.get(key) ?? [];
	list.push(id);
	timers.set(key, list);
}
function pushHist(prev, next) {
	return [...prev.slice(-23), Math.round(next)];
}
function nextTaskId() {
	return `t-${Date.now()}-${shortId()}`;
}
function patchVm(vms, id, patch) {
	return vms.map((v) => v.id === id ? {
		...v,
		...patch
	} : v);
}
function makeTask(title, target) {
	return {
		id: nextTaskId(),
		title,
		target,
		status: "running",
		progress: 8,
		startedAt: Date.now()
	};
}
function finishTask(tasks, id, status = "success", detail) {
	return tasks.map((t) => t.id === id ? {
		...t,
		status,
		progress: status === "success" ? 100 : t.progress,
		completedAt: Date.now(),
		detail
	} : t);
}
function advanceTask(tasks, id, progress) {
	return tasks.map((t) => t.id === id ? {
		...t,
		progress
	} : t);
}
function ipFor(vms, vm) {
	return vm.ip ?? assignedIp(vms.map((v) => v.ip));
}
var useLab = create()(persist((set, get) => ({
	vms,
	hosts,
	selection: { kind: "home" },
	navView: "hosts",
	expanded: defaultExpanded,
	tasks: [{
		id: "t-seed-1",
		title: "Refresh storage policy",
		target: "vsanDatastore",
		status: "success",
		progress: 100,
		startedAt: Date.now() - 108e4,
		completedAt: Date.now() - 102e4
	}],
	search: "",
	tasksOpen: true,
	select: (selection) => set({ selection }),
	setNavView: (navView) => set({ navView }),
	toggleExpanded: (id) => set((s) => ({ expanded: {
		...s.expanded,
		[id]: !s.expanded[id]
	} })),
	setSearch: (search) => set({ search }),
	setTasksOpen: (tasksOpen) => set({ tasksOpen }),
	appendConsole: (id, lines) => set((s) => ({ vms: patchVm(s.vms, id, { consoleLines: [...s.vms.find((v) => v.id === id)?.consoleLines ?? [], ...lines].slice(-200) }) })),
	powerOn: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		if (vm.state === "poweredOn" || vm.state === "starting") return;
		if (get().hosts.find((h) => h.id === vm.hostId)?.state === "maintenance") return;
		clearTimers(id);
		const task = makeTask("Power On virtual machine", vm.name);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, {
				state: "starting",
				booted: false,
				consoleLines: [],
				tools: "notRunning",
				uptimeSec: 0
			})
		}));
		const seq = getBootSequence(vm);
		let acc = 80;
		seq.forEach((step, i) => {
			acc += step.delay;
			later(id, acc, () => {
				get().appendConsole(id, [step.line]);
				const pct = Math.min(96, 10 + Math.round((i + 1) / seq.length * 80));
				set((s) => ({ tasks: advanceTask(s.tasks, task.id, pct) }));
				if (i === seq.length - 1) set((s) => ({
					vms: patchVm(s.vms, id, {
						state: "poweredOn",
						booted: true,
						tools: "running",
						ip: ipFor(s.vms, vm),
						cpuUsage: 8 + Math.random() * 12,
						memUsage: 22 + Math.random() * 18,
						uptimeSec: 1
					}),
					tasks: finishTask(s.tasks, task.id)
				}));
			});
		});
		later(id, 400, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 28) })));
	},
	powerOff: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		if (vm.state === "poweredOff" || vm.state === "stopping") return;
		clearTimers(id);
		const task = makeTask("Power Off virtual machine", vm.name);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, {
				state: "stopping",
				tools: "notRunning"
			})
		}));
		later(id, 280, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 45) })));
		later(id, 720, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					state: "poweredOff",
					booted: false,
					cpuUsage: 0,
					memUsage: 0,
					uptimeSec: 0,
					ip: vm.ip,
					consoleLines: poweredOffConsole(vm.name)
				}),
				tasks: finishTask(s.tasks, task.id)
			}));
		});
	},
	suspend: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm || vm.state !== "poweredOn") return;
		clearTimers(id);
		const task = makeTask("Suspend virtual machine", vm.name);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, { state: "suspending" })
		}));
		later(id, 900, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					state: "suspended",
					tools: "notRunning",
					cpuUsage: 0,
					memUsage: 0
				}),
				tasks: finishTask(s.tasks, task.id)
			}));
		});
	},
	resume: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm || vm.state !== "suspended") return;
		const task = makeTask("Resume virtual machine", vm.name);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, { state: "resuming" })
		}));
		later(id, 700, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					state: "poweredOn",
					booted: true,
					tools: "running",
					cpuUsage: 10,
					memUsage: 40
				}),
				tasks: finishTask(s.tasks, task.id)
			}));
		});
	},
	reset: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		if (vm.state !== "poweredOn" && vm.state !== "starting") return;
		clearTimers(id);
		const task = makeTask("Reset virtual machine", vm.name);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, {
				state: "resetting",
				booted: false,
				consoleLines: [],
				tools: "notRunning"
			})
		}));
		later(id, 400, () => {
			set((s) => ({ tasks: finishTask(s.tasks, task.id) }));
			get().powerOn(id);
		});
	},
	submitCommand: (id, cmd) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm || !vm.booted || vm.state !== "poweredOn") return;
		const lines = runCommand(vm, cmd);
		if (lines[0] === "__CLEAR__") {
			set((s) => ({ vms: patchVm(s.vms, id, { consoleLines: [lines[1] ?? `root@${vm.name}:~# `] }) }));
			return;
		}
		if (lines.includes("__RESET__")) {
			set((s) => ({ vms: patchVm(s.vms, id, { consoleLines: [...vm.consoleLines, ...lines.filter((l) => l !== "__RESET__")] }) }));
			later(id, 500, () => get().reset(id));
			return;
		}
		set((s) => ({ vms: patchVm(s.vms, id, { consoleLines: [...vm.consoleLines, ...lines].slice(-200) }) }));
	},
	createSnapshot: (id, name, description) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		const task = makeTask("Create snapshot", vm.name);
		const snap = {
			id: `sn-${shortId()}`,
			name,
			description,
			createdAt: Date.now(),
			parentId: vm.currentSnapshotId
		};
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-snap", 800, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					snapshots: [...s.vms.find((v) => v.id === id)?.snapshots ?? [], snap],
					currentSnapshotId: snap.id
				}),
				tasks: finishTask(s.tasks, task.id)
			}));
		});
	},
	revertSnapshot: (id, snapId) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		const snap = vm.snapshots.find((x) => x.id === snapId);
		if (!snap) return;
		const task = makeTask("Revert to snapshot", `${vm.name} / ${snap.name}`);
		set((s) => ({
			tasks: [task, ...s.tasks].slice(0, 40),
			vms: patchVm(s.vms, id, { state: vm.state === "poweredOn" ? "resetting" : vm.state })
		}));
		later(id + "-rev", 1100, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					currentSnapshotId: snapId,
					state: vm.state === "resetting" || vm.state === "poweredOn" ? "poweredOn" : vm.state
				}),
				tasks: finishTask(s.tasks, task.id)
			}));
			if (vm.state === "poweredOn" || vm.state === "resetting") get().reset(id);
		});
	},
	deleteSnapshot: (id, snapId) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		const task = makeTask("Delete snapshot", vm.name);
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-ds", 500, () => {
			set((s) => {
				const cur = s.vms.find((v) => v.id === id);
				if (!cur) return s;
				const remaining = cur.snapshots.filter((x) => x.id !== snapId).map((x) => x.parentId === snapId ? {
					...x,
					parentId: cur.snapshots.find((p) => p.id === snapId)?.parentId ?? null
				} : x);
				return {
					vms: patchVm(s.vms, id, {
						snapshots: remaining,
						currentSnapshotId: cur.currentSnapshotId === snapId ? remaining.at(-1)?.id ?? null : cur.currentSnapshotId
					}),
					tasks: finishTask(s.tasks, task.id)
				};
			});
		});
	},
	cloneVm: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		const task = makeTask("Clone virtual machine", vm.name);
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-clone", 1400, () => {
			const cloneId = `vm-${shortId()}`;
			const name = `${vm.name}-clone`;
			const clone = {
				...vm,
				id: cloneId,
				name,
				state: "poweredOff",
				booted: false,
				ip: null,
				tools: "notRunning",
				cpuUsage: 0,
				memUsage: 0,
				uptimeSec: 0,
				consoleLines: poweredOffConsole(name),
				snapshots: [],
				currentSnapshotId: null,
				notes: `Clone of ${vm.name}`,
				mac: `00:50:56:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}`
			};
			set((s) => ({
				vms: [...s.vms, clone],
				tasks: finishTask(s.tasks, task.id),
				selection: {
					kind: "vm",
					id: cloneId
				}
			}));
		});
	},
	deleteVm: (id) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm) return;
		clearTimers(id);
		const task = makeTask("Delete virtual machine", vm.name);
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-del", 600, () => {
			set((s) => ({
				vms: s.vms.filter((v) => v.id !== id),
				tasks: finishTask(s.tasks, task.id),
				selection: { kind: "home" }
			}));
		});
	},
	createVm: (input) => {
		const id = `vm-${shortId()}`;
		const task = makeTask("Create virtual machine", input.name);
		const mac = `00:50:56:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}:${shortId().slice(0, 2)}`;
		const created = {
			id,
			name: input.name,
			guestOs: input.guestOs,
			family: input.family,
			hostId: input.hostId,
			clusterId: get().hosts.find((h) => h.id === input.hostId)?.clusterId ?? "cl-lab",
			datastoreId: input.datastoreId,
			networkId: input.networkId,
			cpu: input.cpu,
			memoryMb: input.memoryMb,
			diskGb: input.diskGb,
			state: "poweredOff",
			ip: null,
			mac,
			tools: "notInstalled",
			cpuUsage: 0,
			memUsage: 0,
			cpuHistory: Array.from({ length: 24 }, () => 0),
			memHistory: Array.from({ length: 24 }, () => 0),
			uptimeSec: 0,
			notes: "",
			hardwareVersion: "AHW 21",
			snapshots: [],
			currentSnapshotId: null,
			consoleLines: poweredOffConsole(input.name),
			booted: false,
			folder: get().hosts.find((h) => h.id === input.hostId)?.clusterId === "cl-prod" ? "Production" : "Lab"
		};
		set((s) => ({
			vms: [...s.vms, created],
			tasks: [{
				...task,
				status: "success",
				progress: 100,
				completedAt: Date.now()
			}, ...s.tasks].slice(0, 40),
			selection: {
				kind: "vm",
				id
			},
			expanded: {
				...s.expanded,
				[input.hostId]: true,
				[created.clusterId]: true,
				dc: true
			}
		}));
		return id;
	},
	migrateVm: (id, hostId) => {
		const vm = get().vms.find((v) => v.id === id);
		const host = get().hosts.find((h) => h.id === hostId);
		if (!vm || !host || vm.hostId === hostId) return;
		const task = makeTask("Relocate virtual machine", `${vm.name} → ${host.name}`);
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-mig", 500, () => set((s) => ({ tasks: advanceTask(s.tasks, task.id, 40) })));
		later(id + "-mig", 1400, () => {
			set((s) => ({
				vms: patchVm(s.vms, id, {
					hostId,
					clusterId: host.clusterId
				}),
				tasks: finishTask(s.tasks, task.id),
				expanded: {
					...s.expanded,
					[hostId]: true,
					[host.clusterId]: true
				}
			}));
		});
	},
	updateHardware: (id, cpu, memoryMb, diskGb) => {
		const vm = get().vms.find((v) => v.id === id);
		if (!vm || vm.state !== "poweredOff") return;
		const task = makeTask("Reconfigure virtual machine", vm.name);
		set((s) => ({
			vms: patchVm(s.vms, id, {
				cpu,
				memoryMb,
				diskGb
			}),
			tasks: [{
				...task,
				status: "success",
				progress: 100,
				completedAt: Date.now()
			}, ...s.tasks].slice(0, 40)
		}));
	},
	renameVm: (id, name) => {
		set((s) => ({ vms: patchVm(s.vms, id, { name }) }));
	},
	setHostMaintenance: (id, on) => {
		const host = get().hosts.find((h) => h.id === id);
		if (!host) return;
		const task = makeTask(on ? "Enter maintenance mode" : "Exit maintenance mode", host.name);
		set((s) => ({ tasks: [task, ...s.tasks].slice(0, 40) }));
		later(id + "-mm", 700, () => {
			set((s) => ({
				hosts: s.hosts.map((h) => h.id === id ? {
					...h,
					state: on ? "maintenance" : "connected"
				} : h),
				tasks: finishTask(s.tasks, task.id)
			}));
		});
	},
	tick: () => {
		set((s) => {
			const vms = s.vms.map((vm) => {
				if (vm.state !== "poweredOn") {
					if (vm.cpuUsage === 0 && vm.memUsage === 0) return vm;
					return {
						...vm,
						cpuUsage: 0,
						memUsage: 0
					};
				}
				const cpuUsage = clamp(vm.cpuUsage + (Math.random() - .48) * 6, 3, 92);
				const memUsage = clamp(vm.memUsage + (Math.random() - .5) * 2.2, 14, 91);
				return {
					...vm,
					cpuUsage,
					memUsage,
					uptimeSec: vm.uptimeSec + 2,
					cpuHistory: pushHist(vm.cpuHistory, cpuUsage),
					memHistory: pushHist(vm.memHistory, memUsage)
				};
			});
			return {
				vms,
				hosts: s.hosts.map((h) => {
					const on = vms.filter((v) => v.hostId === h.id && v.state === "poweredOn");
					const cpuShare = on.reduce((a, v) => a + v.cpu / h.cpuCores * v.cpuUsage, 0);
					const memShare = on.reduce((a, v) => a + v.memoryMb / 1024 / h.memoryGb * v.memUsage, 0);
					const cpuUsage = h.state === "maintenance" ? 4 : clamp(cpuShare, 4, 96);
					const memUsage = h.state === "maintenance" ? 8 : clamp(memShare, 8, 96);
					return {
						...h,
						cpuUsage,
						memUsage,
						cpuHistory: pushHist(h.cpuHistory, cpuUsage),
						memHistory: pushHist(h.memHistory, memUsage),
						uptimeSec: h.state === "disconnected" ? h.uptimeSec : h.uptimeSec + 2
					};
				})
			};
		});
	},
	resetLab: () => {
		for (const key of timers.keys()) clearTimers(key);
		set({
			vms,
			hosts,
			selection: { kind: "home" },
			navView: "hosts",
			expanded: defaultExpanded,
			tasks: [],
			search: ""
		});
	}
}), {
	name: "aether-workstation-v1",
	skipHydration: true,
	partialize: (s) => ({
		vms: s.vms,
		hosts: s.hosts,
		selection: s.selection,
		navView: s.navView,
		expanded: s.expanded
	})
}));
function isBusy(state) {
	return state === "starting" || state === "stopping" || state === "suspending" || state === "resuming" || state === "resetting";
}
function CommandPalette({ open, onOpenChange }) {
	const vms = useLab((s) => s.vms);
	const hosts = useLab((s) => s.hosts);
	const select = useLab((s) => s.select);
	const setNavView = useLab((s) => s.setNavView);
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) setQ("");
	}, [open]);
	const items = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		const rows = [
			...vms.map((v) => ({
				id: v.id,
				label: v.name,
				sub: `${v.guestOs} · ${v.ip ?? "no IP"}`,
				kind: "VM",
				run: () => {
					setNavView("hosts");
					select({
						kind: "vm",
						id: v.id
					});
				}
			})),
			...hosts.map((h) => ({
				id: h.id,
				label: h.name,
				sub: h.model,
				kind: "Host",
				run: () => {
					setNavView("hosts");
					select({
						kind: "host",
						id: h.id
					});
				}
			})),
			...clusters.map((c) => ({
				id: c.id,
				label: c.name,
				sub: "Cluster",
				kind: "Cluster",
				run: () => {
					setNavView("hosts");
					select({
						kind: "cluster",
						id: c.id
					});
				}
			})),
			...datastores.map((d) => ({
				id: d.id,
				label: d.name,
				sub: d.type,
				kind: "Datastore",
				run: () => {
					setNavView("storage");
					select({
						kind: "datastore",
						id: d.id
					});
				}
			})),
			...networks.map((n) => ({
				id: n.id,
				label: n.name,
				sub: `VLAN ${n.vlan}`,
				kind: "Network",
				run: () => {
					setNavView("networking");
					select({
						kind: "network",
						id: n.id
					});
				}
			}))
		];
		return needle ? rows.filter((r) => `${r.label} ${r.sub} ${r.kind}`.toLowerCase().includes(needle)) : rows;
	}, [
		q,
		vms,
		hosts,
		select,
		setNavView
	]);
	const icon = (kind) => {
		if (kind === "VM") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "size-3.5 text-muted-foreground" });
		if (kind === "Host") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 text-muted-foreground" });
		if (kind === "Datastore") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-3.5 text-muted-foreground" });
		if (kind === "Network") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "size-3.5 text-muted-foreground" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 text-muted-foreground" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "top-[18%] max-w-lg translate-y-0 gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Search inventory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search VMs, hosts, datastores…",
						className: "h-11 w-full bg-transparent text-sm outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-80 overflow-auto p-1",
					children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-6 text-center text-xs text-muted-foreground",
						children: "No matching objects"
					}) : items.slice(0, 20).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("flex w-full items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-accent"),
						onClick: () => {
							item.run();
							onOpenChange(false);
						},
						children: [
							icon(item.kind),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate text-sm",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xs text-muted-foreground",
								children: item.kind
							})
						]
					}) }, item.id))
				})
			]
		})
	});
}
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2 border-l border-l-transparent p-px", orientation === "horizontal" && "h-2 flex-col border-t border-t-transparent p-px", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var badgeVariants = cva("inline-flex items-center rounded-sm border px-1.5 py-px text-2xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary/15 text-primary",
		running: "border-transparent bg-success/15 text-success",
		off: "border-border bg-secondary text-muted-foreground",
		suspended: "border-transparent bg-warning/15 text-warning",
		busy: "border-transparent bg-primary/15 text-primary",
		warning: "border-transparent bg-warning/15 text-warning",
		critical: "border-transparent bg-destructive/15 text-destructive",
		outline: "border-border text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function powerLabel(state) {
	switch (state) {
		case "poweredOn": return "Powered On";
		case "poweredOff": return "Powered Off";
		case "suspended": return "Suspended";
		case "starting": return "Powering On";
		case "stopping": return "Powering Off";
		case "suspending": return "Suspending";
		case "resuming": return "Resuming";
		case "resetting": return "Resetting";
	}
}
function PowerBadge({ state }) {
	const variant = state === "poweredOn" ? "running" : state === "suspended" ? "suspended" : isBusy(state) ? "busy" : "off";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant,
		children: powerLabel(state)
	});
}
function HostBadge({ state }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: state === "connected" ? "running" : state === "maintenance" ? "warning" : "off",
		children: state === "connected" ? "Connected" : state === "maintenance" ? "Maintenance" : "Disconnected"
	});
}
function ToolsBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: status === "running" ? "running" : status === "notInstalled" ? "warning" : "off",
		children: status === "running" ? "Guest Tools running" : status === "notInstalled" ? "Not installed" : "Not running"
	});
}
function StateDot({ state }) {
	const color = state === "poweredOn" || state === "connected" ? "bg-success" : state === "suspended" || state === "maintenance" || isBusy(state) ? "bg-warning" : "bg-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-flex size-2 shrink-0",
		children: [state === "starting" || state === "stopping" || state === "resuming" || state === "resetting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-warning opacity-50" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `relative inline-flex size-2 rounded-full ${color}` })]
	});
}
var navItems = [
	{
		id: "hosts",
		label: "Hosts & Clusters",
		icon: Server
	},
	{
		id: "vms",
		label: "VMs & Templates",
		icon: Box
	},
	{
		id: "storage",
		label: "Storage",
		icon: HardDrive
	},
	{
		id: "networking",
		label: "Networking",
		icon: Network
	}
];
function Row({ depth, active, onClick, onToggle, open, expandable, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "tree-row flex min-h-10 items-center gap-0.5 pr-2 text-xs md:min-h-7",
		"data-active": active,
		style: { paddingLeft: 8 + depth * 12 },
		children: [expandable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex size-6 items-center justify-center text-muted-foreground md:size-5",
			onClick: (e) => {
				e.stopPropagation();
				onToggle?.();
			},
			"aria-label": open ? "Collapse" : "Expand",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-6 md:size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick,
			className: cn("flex min-w-0 flex-1 items-center gap-1.5 rounded-sm px-1 py-1 text-left hover:bg-accent", active && "text-foreground"),
			children
		})]
	});
}
function Inventory({ onNavigate }) {
	const navView = useLab((s) => s.navView);
	const setNavView = useLab((s) => s.setNavView);
	const expanded = useLab((s) => s.expanded);
	const toggle = useLab((s) => s.toggleExpanded);
	const select = useLab((s) => s.select);
	const selection = useLab((s) => s.selection);
	const vms = useLab((s) => s.vms);
	const hosts = useLab((s) => s.hosts);
	const q = useLab((s) => s.search).trim().toLowerCase();
	const go = (sel) => {
		select(sel);
		onNavigate?.();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-chrome",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-4 border-b border-border",
			children: navItems.map((item) => {
				const Icon = item.icon;
				const active = navView === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					title: item.label,
					onClick: () => setNavView(item.id),
					className: cn("flex h-11 flex-col items-center justify-center gap-0.5 text-muted-foreground md:h-12", active && "bg-tree-active text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-2xs md:block",
						children: item.label.split(" ")[0]
					})]
				}, item.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-1",
				children: [
					navView === "hosts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
						depth: 0,
						active: selection.kind === "datacenter" || selection.kind === "home",
						expandable: true,
						open: expanded.dc,
						onToggle: () => toggle("dc"),
						onClick: () => go({ kind: "datacenter" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: DATACENTER_NAME
						})]
					}), expanded.dc ? clusters.map((cl) => {
						const clHosts = hosts.filter((h) => h.clusterId === cl.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
							depth: 1,
							active: selection.kind === "cluster" && selection.id === cl.id,
							expandable: true,
							open: expanded[cl.id],
							onToggle: () => toggle(cl.id),
							onClick: () => go({
								kind: "cluster",
								id: cl.id
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: cl.name
							})]
						}), expanded[cl.id] ? clHosts.map((h) => {
							const hVms = vms.filter((v) => v.hostId === h.id).filter((v) => !q || v.name.toLowerCase().includes(q));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
								depth: 2,
								active: selection.kind === "host" && selection.id === h.id,
								expandable: true,
								open: expanded[h.id],
								onToggle: () => toggle(h.id),
								onClick: () => go({
									kind: "host",
									id: h.id
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, { state: h.state }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: h.name.split(".")[0]
								})]
							}), expanded[h.id] ? hVms.map((vm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
								depth: 3,
								active: selection.kind === "vm" && selection.id === vm.id,
								onClick: () => go({
									kind: "vm",
									id: vm.id
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, { state: vm.state }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: vm.name
								})]
							}, vm.id)) : null] }, h.id);
						}) : null] }, cl.id);
					}) : null] }) : null,
					navView === "vms" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
						depth: 0,
						active: selection.kind === "vms",
						expandable: true,
						open: expanded.folders,
						onToggle: () => toggle("folders"),
						onClick: () => go({ kind: "vms" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VM Folders" })]
					}), expanded.folders ? ["Production", "Lab"].map((folder) => {
						const list = vms.filter((v) => v.folder === folder).filter((v) => !q || v.name.toLowerCase().includes(q));
						const key = `folder-${folder}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
							depth: 1,
							active: false,
							expandable: true,
							open: expanded[key],
							onToggle: () => toggle(key),
							onClick: () => toggle(key),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: folder }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto tabular text-2xs text-muted-foreground",
									children: list.length
								})
							]
						}), expanded[key] ? list.map((vm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
							depth: 2,
							active: selection.kind === "vm" && selection.id === vm.id,
							onClick: () => go({
								kind: "vm",
								id: vm.id
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, { state: vm.state }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: vm.name
							})]
						}, vm.id)) : null] }, folder);
					}) : null] }) : null,
					navView === "storage" ? datastores.map((ds) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
						depth: 0,
						active: selection.kind === "datastore" && selection.id === ds.id,
						onClick: () => go({
							kind: "datastore",
							id: ds.id
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: ds.name
						})]
					}, ds.id)) : null,
					navView === "networking" ? networks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
						depth: 0,
						active: selection.kind === "network" && selection.id === n.id,
						onClick: () => go({
							kind: "network",
							id: n.id
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: n.name
						})]
					}, n.id)) : null
				]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-border bg-transparent hover:bg-accent",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			ghost: "hover:bg-accent hover:text-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-3.5",
			sm: "h-8 rounded-sm px-2.5 text-xs",
			lg: "h-11 rounded-md px-5",
			icon: "size-9",
			toolbar: "h-11 px-2.5 text-xs md:h-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-secondary", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-transform duration-300 ease-out",
		style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
	})
}));
Progress.displayName = Root$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, side = "left", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 flex flex-col bg-chrome shadow-elevated transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out", side === "left" && "inset-y-0 left-0 h-full w-72 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", side === "right" && "inset-y-0 right-0 h-full w-72 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "bottom" && "inset-x-0 bottom-0 h-72 border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-2 top-2 rounded-sm p-1 text-muted-foreground hover:bg-accent",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b border-border px-4 py-3", className),
		...props
	});
}
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-sm font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
function Gauge({ value, label, hint }) {
	const pct = Math.max(0, Math.min(100, value));
	const tone = pct >= 85 ? "bg-destructive" : pct >= 70 ? "bg-warning" : "bg-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xs font-medium uppercase tracking-wide text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular text-xs text-foreground",
				children: [
					pct.toFixed(0),
					"%",
					hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [" · ", hint]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gauge-track h-1.5 overflow-hidden rounded-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full transition-[width] duration-500 ease-out", tone),
				style: { width: `${pct}%` }
			})
		})]
	});
}
function StatCard({ label, value, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-card p-3 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-2xs font-medium uppercase tracking-wide text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 tabular text-xl font-medium tracking-tight",
				children: value
			}),
			sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-2xs text-muted-foreground",
				children: sub
			}) : null
		]
	});
}
function Kv({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-2 border-b border-border py-1.5 last:border-0 sm:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "col-span-1 text-xs text-foreground sm:col-span-2",
			children: v
		})]
	});
}
function Panel$1({ title, children, className, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-lg bg-card shadow-border", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-2 border-b border-border px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs font-medium",
				children: title
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3",
			children
		})]
	});
}
function Spark({ data, color = "var(--color-primary)" }) {
	const rows = data.map((v, i) => ({
		i,
		v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-36 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: rows,
				margin: {
					top: 8,
					right: 8,
					left: -20,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: `g-${color.replace(/[^a-z0-9]/gi, "")}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: color,
							stopOpacity: .35
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: color,
							stopOpacity: 0
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "i",
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [0, 100],
						tick: {
							fill: "var(--color-muted-foreground)",
							fontSize: 10
						},
						width: 36
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "var(--color-popover)",
							border: "1px solid var(--color-border)",
							borderRadius: 6,
							fontSize: 12
						},
						formatter: (value) => [`${Number(value).toFixed(0)}%`, "Usage"],
						labelFormatter: () => ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "v",
						stroke: color,
						fill: `url(#g-${color.replace(/[^a-z0-9]/gi, "")})`,
						strokeWidth: 1.5
					})
				]
			})
		})
	});
}
function VmTable({ list, onOpen }) {
	const hosts = useLab((s) => s.hosts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "text-2xs uppercase tracking-wide text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "State"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "Host"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "Guest OS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "CPU"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "Memory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-2 font-medium",
							children: "IP"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((vm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "cursor-pointer border-b border-border hover:bg-row-hover",
				onClick: () => onOpen(vm.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, { state: vm.state }), vm.name]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerBadge, { state: vm.state })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2 text-muted-foreground",
						children: hosts.find((h) => h.id === vm.hostId)?.name.split(".")[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2 text-muted-foreground",
						children: vm.guestOs.replace(" (64-bit)", "")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2 tabular",
						children: vm.state === "poweredOn" ? `${vm.cpuUsage.toFixed(0)}%` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2 tabular",
						children: vm.state === "poweredOn" ? `${vm.memUsage.toFixed(0)}%` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-2 font-mono tabular",
						children: vm.ip ?? "—"
					})
				]
			}, vm.id)) })]
		})
	});
}
function HomeView() {
	const vms = useLab((s) => s.vms);
	const hosts = useLab((s) => s.hosts);
	const select = useLab((s) => s.select);
	const running = vms.filter((v) => v.state === "poweredOn").length;
	const suspended = vms.filter((v) => v.state === "suspended").length;
	const alerts = seedAlerts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-medium tracking-tight",
				children: DATACENTER_NAME
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Connected to ",
					VCENTER_HOST,
					" · Aether Workstation 8.0"
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Hosts",
						value: hosts.length,
						sub: `${hosts.filter((h) => h.state === "connected").length} connected`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Virtual machines",
						value: vms.length,
						sub: `${running} powered on`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Suspended",
						value: suspended,
						sub: "memory reserved on datastore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Alerts",
						value: alerts.length,
						sub: "open in this datacenter"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: clusters.map((cl) => {
					const clHosts = hosts.filter((h) => h.clusterId === cl.id);
					const avgCpu = clHosts.reduce((a, h) => a + h.cpuUsage, 0) / (clHosts.length || 1);
					const avgMem = clHosts.reduce((a, h) => a + h.memUsage, 0) / (clHosts.length || 1);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
						title: cl.name,
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => select({
								kind: "cluster",
								id: cl.id
							}),
							children: "Open"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex gap-2",
							children: [
								cl.ha ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "HA" }) : null,
								cl.drs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "DRS" }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									children: [clHosts.length, " hosts"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
								value: avgCpu,
								label: "CPU"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
								value: avgMem,
								label: "Memory"
							})]
						})]
					}, cl.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
					title: "Datastores",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: datastores.map((ds) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "block w-full text-left",
							onClick: () => select({
								kind: "datastore",
								id: ds.id
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
								value: ds.usedGb / ds.capacityGb * 100,
								label: ds.name,
								hint: formatBytesGb(ds.capacityGb - ds.usedGb) + " free"
							})
						}, ds.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
					title: "Alerts",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: alerts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md bg-secondary p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: a.level === "critical" ? "critical" : a.level === "warning" ? "warning" : "outline",
									children: a.level
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: a.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xs text-muted-foreground",
								children: a.body
							})]
						}, a.id))
					})
				})]
			})
		]
	});
}
function ClusterView({ cluster }) {
	const hosts = useLab((s) => s.hosts).filter((h) => h.clusterId === cluster.id);
	const vms = useLab((s) => s.vms).filter((v) => v.clusterId === cluster.id);
	const select = useLab((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-medium",
				children: cluster.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Cluster · HA ",
					cluster.ha ? "enabled" : "off",
					" · DRS ",
					cluster.drs ? "fully automated" : "off"
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: hosts.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
					title: h.name,
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => select({
							kind: "host",
							id: h.id
						}),
						children: "Open"
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostBadge, { state: h.state })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							value: h.cpuUsage,
							label: "CPU",
							hint: `${h.cpuCores} cores`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							value: h.memUsage,
							label: "Memory",
							hint: formatBytesGb(h.memoryGb)
						})]
					})]
				}, h.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
				title: "Virtual machines",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmTable, {
					list: vms,
					onOpen: (id) => select({
						kind: "vm",
						id
					})
				})
			})
		]
	});
}
function HostView({ host }) {
	const vms = useLab((s) => s.vms).filter((v) => v.hostId === host.id);
	const select = useLab((s) => s.select);
	const setMaint = useLab((s) => s.setHostMaintenance);
	const cluster = clusters.find((c) => c.id === host.clusterId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-medium",
					children: host.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						host.model,
						" · ",
						host.version
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostBadge, { state: host.state }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setMaint(host.id, host.state !== "maintenance"),
						children: host.state === "maintenance" ? "Exit maintenance" : "Enter maintenance"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
					title: "CPU",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
						value: host.cpuUsage,
						label: "Utilization",
						hint: `${host.cpuCores} × ${host.cpuMhz} MHz`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, { data: host.cpuHistory })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
					title: "Memory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
						value: host.memUsage,
						label: "Utilization",
						hint: formatBytesGb(host.memoryGb)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
						data: host.memHistory,
						color: "var(--color-muted-foreground)"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
				title: "Summary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Cluster",
						v: cluster?.name ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "State",
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostBadge, { state: host.state })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Uptime",
						v: formatUptime(host.uptimeSec)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Hypervisor",
						v: host.version
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
						k: "Virtual machines",
						v: String(vms.length)
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
				title: "Virtual machines on this host",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmTable, {
					list: vms,
					onOpen: (id) => select({
						kind: "vm",
						id
					})
				})
			})
		]
	});
}
function DatastoreView({ ds }) {
	const vms = useLab((s) => s.vms).filter((v) => v.datastoreId === ds.id);
	const select = useLab((s) => s.select);
	const usedPct = ds.usedGb / ds.capacityGb * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-medium",
				children: ds.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [ds.type, " datastore"]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
				title: "Capacity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
					value: usedPct,
					label: "Used",
					hint: `${formatBytesGb(ds.usedGb)} of ${formatBytesGb(ds.capacityGb)}`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
				title: "Virtual disks",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-2xs uppercase tracking-wide text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-2 font-medium",
										children: "File"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-2 font-medium",
										children: "VM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-2 py-2 font-medium",
										children: "Size"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: vms.map((vm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "cursor-pointer border-b border-border hover:bg-row-hover",
							onClick: () => select({
								kind: "vm",
								id: vm.id
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-2 py-2 font-mono",
									children: [vm.name, ".vmdk"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-2 py-2",
									children: vm.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-2 py-2 tabular",
									children: formatBytesGb(vm.diskGb)
								})
							]
						}, vm.id)) })]
					})
				})
			})
		]
	});
}
function NetworkView({ net }) {
	const vms = useLab((s) => s.vms).filter((v) => v.networkId === net.id);
	const select = useLab((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-lg font-medium",
			children: net.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-muted-foreground",
			children: [
				net.type === "distributed" ? "Distributed port group" : "Standard port group",
				" · ",
				net.vswitch,
				" · VLAN ",
				net.vlan
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel$1, {
			title: "Connected virtual machines",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmTable, {
				list: vms,
				onOpen: (id) => select({
					kind: "vm",
					id
				})
			}), vms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "No virtual machines on this network."
			}) : null]
		})]
	});
}
function VmListView() {
	const vms = useLab((s) => s.vms);
	const select = useLab((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-lg font-medium",
			children: "Virtual Machines"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
			title: `${vms.length} objects`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmTable, {
				list: vms,
				onOpen: (id) => select({
					kind: "vm",
					id
				})
			})
		})]
	});
}
function ConsolePanel({ vm, fill }) {
	const submit = useLab((s) => s.submitCommand);
	const powerOn = useLab((s) => s.powerOn);
	const reset = useLab((s) => s.reset);
	const [input, setInput] = (0, import_react.useState)("");
	const [full, setFull] = (0, import_react.useState)(false);
	const scroller = (0, import_react.useRef)(null);
	const field = (0, import_react.useRef)(null);
	const lines = vm.consoleLines.length > 0 ? vm.consoleLines : vm.state === "poweredOff" ? poweredOffConsole(vm.name) : vm.booted ? idleConsole(vm) : ["Waiting for firmware..."];
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [vm.consoleLines, vm.state]);
	const interactive = vm.state === "poweredOn" && vm.booted;
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-h-0 flex-col bg-console", fill || full ? "h-full" : "h-80 md:h-96"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-9 items-center gap-1 border-b border-chrome-border bg-chrome px-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-auto truncate pl-1 font-mono text-2xs text-muted-foreground",
					children: ["Remote Console — ", vm.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					disabled: !interactive,
					onClick: () => reset(vm.id),
					title: "Ctrl-Alt-Del",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "CAD"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "toolbar",
					variant: "ghost",
					onClick: () => setFull((v) => !v),
					title: "Full screen",
					children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shrink, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { className: "size-3.5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: scroller,
			className: "relative min-h-0 flex-1 overflow-auto px-3 py-2 font-mono text-xs leading-relaxed text-foreground",
			onClick: () => field.current?.focus(),
			children: [
				lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "whitespace-pre-wrap break-all",
					children: line || "\xA0"
				}, `${i}-${line.slice(0, 24)}`)),
				interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex items-center",
					onSubmit: (e) => {
						e.preventDefault();
						submit(vm.id, input);
						setInput("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: field,
						value: input,
						onChange: (e) => setInput(e.target.value),
						className: "min-w-0 flex-1 bg-transparent font-mono text-xs outline-none",
						autoCapitalize: "off",
						autoComplete: "off",
						autoCorrect: "off",
						spellCheck: false,
						"aria-label": "Console command"
					}), !input ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "console-caret",
						"aria-hidden": true
					}) : null]
				}) : null,
				vm.state === "suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center bg-console/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-border bg-card px-4 py-2 text-xs text-muted-foreground",
						children: suspendedOverlay()
					})
				}) : null,
				vm.state === "poweredOff" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => powerOn(vm.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, { className: "size-3.5" }), "Power On"]
					})
				}) : null,
				vm.state === "starting" || vm.state === "resetting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 pt-2 text-2xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3 animate-spin" }), "POST / boot in progress"]
				}) : null
			]
		})]
	});
	if (!full) return body;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-console",
		children: body
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto size-3.5" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-36 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-elevated", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-elevated", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-40", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-border transition-colors duration-150", "placeholder:text-muted-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
	ref,
	className: cn("text-xs font-medium text-muted-foreground", className),
	...props
}));
Label.displayName = Root$2.displayName;
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center gap-0 border-b border-border text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center whitespace-nowrap px-3 text-xs font-medium", "border-b-2 border-transparent transition-colors duration-150", "hover:text-foreground", "data-[state=active]:border-primary data-[state=active]:text-foreground", "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40", className),
	...props
}));
TabsTrigger.displayName = Trigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-0 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function VmToolbar({ vm }) {
	const powerOn = useLab((s) => s.powerOn);
	const powerOff = useLab((s) => s.powerOff);
	const suspend = useLab((s) => s.suspend);
	const resume = useLab((s) => s.resume);
	const reset = useLab((s) => s.reset);
	const cloneVm = useLab((s) => s.cloneVm);
	const deleteVm = useLab((s) => s.deleteVm);
	const migrateVm = useLab((s) => s.migrateVm);
	const hosts = useLab((s) => s.hosts);
	const busy = isBusy(vm.state);
	const on = vm.state === "poweredOn";
	const off = vm.state === "poweredOff";
	const susp = vm.state === "suspended";
	const [snapOpen, setSnapOpen] = (0, import_react.useState)(false);
	const [delOpen, setDelOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 overflow-x-auto border-b border-border bg-card px-2 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					disabled: busy || on,
					onClick: () => {
						powerOn(vm.id);
						toast.message(`Power On · ${vm.name}`);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 text-success" }), "Power On"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					disabled: busy || off,
					onClick: () => {
						powerOff(vm.id);
						toast.message(`Power Off · ${vm.name}`);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 text-destructive" }), "Power Off"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					disabled: busy || !on,
					onClick: () => {
						suspend(vm.id);
						toast.message(`Suspend · ${vm.name}`);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5 text-warning" }), "Suspend"]
				}),
				susp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					onClick: () => resume(vm.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), "Resume"]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					disabled: busy || !on,
					onClick: () => reset(vm.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Reset"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					onClick: () => setSnapOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-3.5" }), "Snapshot"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "toolbar",
					variant: "ghost",
					onClick: () => {
						cloneVm(vm.id);
						toast.message(`Cloning ${vm.name}`);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), "Clone"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "toolbar",
						variant: "ghost",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-3.5" }), "More"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "start",
					children: [
						hosts.filter((h) => h.id !== vm.hostId).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							disabled: h.state === "maintenance",
							onSelect: () => migrateVm(vm.id, h.id),
							children: ["Migrate to ", h.name.split(".")[0]]
						}, h.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							className: "text-destructive",
							onSelect: () => setDelOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Delete"]
						})
					]
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapshotDialog, {
			vm,
			open: snapOpen,
			onOpenChange: setSnapOpen
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: delOpen,
			onOpenChange: setDelOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
				"Delete ",
				vm.name,
				"?"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "The virtual machine and its disks will be removed from inventory. This cannot be undone in this lab." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setDelOpen(false),
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "destructive",
				onClick: () => {
					deleteVm(vm.id);
					setDelOpen(false);
				},
				children: "Delete"
			})] })] })
		})
	] });
}
function SnapshotDialog({ vm, open, onOpenChange }) {
	const createSnapshot = useLab((s) => s.createSnapshot);
	const [name, setName] = (0, import_react.useState)("");
	const [desc, setDesc] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Take snapshot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"Capture the current disk and, if powered on, memory state of ",
				vm.name,
				"."
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "snap-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "snap-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "before-change"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "snap-desc",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "snap-desc",
						value: desc,
						onChange: (e) => setDesc(e.target.value)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => onOpenChange(false),
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				disabled: !name.trim(),
				onClick: () => {
					createSnapshot(vm.id, name.trim(), desc);
					toast.success("Creating snapshot");
					setName("");
					setDesc("");
					onOpenChange(false);
				},
				children: "Take snapshot"
			})] })
		] })
	});
}
function SnapshotTree({ vm }) {
	const revert = useLab((s) => s.revertSnapshot);
	const remove = useLab((s) => s.deleteSnapshot);
	const roots = vm.snapshots.filter((s) => !s.parentId);
	const kids = (id) => vm.snapshots.filter((s) => s.parentId === id);
	const node = (id, depth) => {
		const s = vm.snapshots.find((x) => x.id === id);
		if (!s) return null;
		const current = vm.currentSnapshotId === s.id;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { paddingLeft: depth * 16 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-border py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-medium",
							children: [
								s.name,
								" ",
								current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "· You are here"
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-2xs text-muted-foreground",
							children: [
								new Date(s.createdAt).toLocaleString(),
								" ",
								s.description ? `· ${s.description}` : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: current,
						onClick: () => revert(vm.id, s.id),
						children: "Revert"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => remove(vm.id, s.id),
						children: "Delete"
					})
				]
			}), kids(s.id).map((c) => node(c.id, depth + 1))]
		}, s.id);
	};
	if (vm.snapshots.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-muted-foreground",
		children: "No snapshots. Use Snapshot in the toolbar to capture a restore point."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: roots.map((r) => node(r.id, 0)) });
}
function ConfigureTab({ vm }) {
	const update = useLab((s) => s.updateHardware);
	const off = vm.state === "poweredOff";
	const [cpu, setCpu] = (0, import_react.useState)(String(vm.cpu));
	const [mem, setMem] = (0, import_react.useState)(String(vm.memoryMb / 1024));
	const [disk, setDisk] = (0, import_react.useState)(String(vm.diskGb));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-lg gap-3 p-4",
		children: [
			!off ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-secondary px-3 py-2 text-xs text-muted-foreground",
				children: "CPU, memory and disk can only be changed while the virtual machine is powered off."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "hw-cpu",
					children: "vCPU"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "hw-cpu",
					type: "number",
					min: 1,
					max: 32,
					disabled: !off,
					value: cpu,
					onChange: (e) => setCpu(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "hw-mem",
					children: "Memory (GB)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "hw-mem",
					type: "number",
					min: 1,
					max: 128,
					disabled: !off,
					value: mem,
					onChange: (e) => setMem(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "hw-disk",
					children: "Hard disk 1 (GB)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "hw-disk",
					type: "number",
					min: 8,
					disabled: !off,
					value: disk,
					onChange: (e) => setDisk(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				disabled: !off,
				onClick: () => {
					update(vm.id, Number(cpu) || vm.cpu, Math.round(Number(mem) * 1024) || vm.memoryMb, Number(disk) || vm.diskGb);
					toast.success("Hardware reconfigured");
				},
				children: "Apply"
			})
		]
	});
}
function VmView({ vm }) {
	const host = useLab((s) => s.hosts).find((h) => h.id === vm.hostId);
	const cluster = clusters.find((c) => c.id === vm.clusterId);
	const ds = datastores.find((d) => d.id === vm.datastoreId);
	const net = networks.find((n) => n.id === vm.networkId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate text-base font-medium",
						children: vm.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-2xs text-muted-foreground",
						children: [
							vm.guestOs,
							" · ",
							host?.name.split(".")[0],
							" · ",
							cluster?.name
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerBadge, { state: vm.state })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmToolbar, { vm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "summary",
				className: "flex min-h-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "w-full justify-start px-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "summary",
									children: "Summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "console",
									children: "Console"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "monitor",
									children: "Monitor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "snapshots",
									children: "Snapshots"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "configure",
									children: "Configure"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "summary",
						className: "min-h-0 flex-1 overflow-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 p-4 lg:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
									title: "Guest OS",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Guest",
											v: vm.guestOs
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Tools",
											v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsBadge, { status: vm.tools })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "DNS name",
											v: vm.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "IP address",
											v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: vm.ip ?? "—"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Uptime",
											v: formatUptime(vm.uptimeSec)
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
									title: "Resources",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
											value: vm.state === "poweredOn" ? vm.cpuUsage : 0,
											label: "CPU",
											hint: `${vm.cpu} vCPU`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
											value: vm.state === "poweredOn" ? vm.memUsage : 0,
											label: "Memory",
											hint: formatMemoryMb(vm.memoryMb)
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
									title: "VM Hardware",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Compatibility",
											v: vm.hardwareVersion
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "CPU",
											v: `${vm.cpu} vCPU`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Memory",
											v: formatMemoryMb(vm.memoryMb)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Hard disk 1",
											v: `${vm.diskGb} GB on ${ds?.name ?? "—"}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Network adapter 1",
											v: `${net?.name ?? "—"} (${vm.mac})`
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
									title: "Related objects",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Host",
											v: host?.name ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Host state",
											v: host ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostBadge, { state: host.state }) : "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Cluster",
											v: cluster?.name ?? "—"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Folder",
											v: vm.folder
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kv, {
											k: "Notes",
											v: vm.notes || "—"
										})
									] })
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "console",
						className: "min-h-0 flex-1 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsolePanel, {
							vm,
							fill: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "monitor",
						className: "min-h-0 flex-1 overflow-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
								title: "CPU (%)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, { data: vm.cpuHistory })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
								title: "Memory (%)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
									data: vm.memHistory,
									color: "var(--color-muted-foreground)"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "snapshots",
						className: "min-h-0 flex-1 overflow-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel$1, {
							title: "Snapshot manager",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapshotTree, { vm })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "configure",
						className: "min-h-0 flex-1 overflow-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigureTab, { vm })
					})
				]
			})
		]
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm", "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50", "[&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 text-muted-foreground" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-72 min-w-32 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-elevated", position === "popper" && "data-[side=bottom]:translate-y-1", className),
	position,
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
		className: "p-1",
		children
	})
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-40", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var GUEST_CATALOG = [
	{
		id: "ubuntu24",
		name: "Ubuntu Linux (64-bit)",
		family: "linux",
		cpu: 2,
		memoryMb: 4096,
		diskGb: 40
	},
	{
		id: "debian12",
		name: "Debian GNU/Linux (64-bit)",
		family: "linux",
		cpu: 2,
		memoryMb: 2048,
		diskGb: 32
	},
	{
		id: "alma9",
		name: "AlmaLinux 9 (64-bit)",
		family: "linux",
		cpu: 4,
		memoryMb: 4096,
		diskGb: 40
	},
	{
		id: "win2022",
		name: "Microsoft Windows Server 2022 (64-bit)",
		family: "windows",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 80
	},
	{
		id: "win11",
		name: "Microsoft Windows 11 (64-bit)",
		family: "windows",
		cpu: 4,
		memoryMb: 8192,
		diskGb: 64
	},
	{
		id: "freebsd",
		name: "FreeBSD 14 (64-bit)",
		family: "other",
		cpu: 2,
		memoryMb: 2048,
		diskGb: 20
	}
];
function NewVmWizard({ open, onOpenChange }) {
	const hosts = useLab((s) => s.hosts);
	const createVm = useLab((s) => s.createVm);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("new-vm");
	const [osId, setOsId] = (0, import_react.useState)(GUEST_CATALOG[0].id);
	const [hostId, setHostId] = (0, import_react.useState)(hosts[0]?.id ?? "h4");
	const [dsId, setDsId] = (0, import_react.useState)(datastores[0].id);
	const [netId, setNetId] = (0, import_react.useState)(networks[1].id);
	const os = GUEST_CATALOG.find((g) => g.id === osId) ?? GUEST_CATALOG[0];
	const [cpu, setCpu] = (0, import_react.useState)(String(os.cpu));
	const [mem, setMem] = (0, import_react.useState)(String(os.memoryMb / 1024));
	const [disk, setDisk] = (0, import_react.useState)(String(os.diskGb));
	const reset = () => {
		setStep(0);
		setName("new-vm");
		setOsId(GUEST_CATALOG[0].id);
	};
	const finish = () => {
		createVm({
			name: name.trim() || "new-vm",
			guestOs: os.name,
			family: os.family,
			hostId,
			datastoreId: dsId,
			networkId: netId,
			cpu: Number(cpu) || 2,
			memoryMb: Math.round(Number(mem) * 1024) || 2048,
			diskGb: Number(disk) || 20
		});
		toast.success(`Created ${name.trim() || "new-vm"}`);
		onOpenChange(false);
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) reset();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New Virtual Machine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Step ",
					step + 1,
					" of 4 — ",
					[
						"Name & guest OS",
						"Compute",
						"Storage & network",
						"Ready to complete"
					][step]
				] })] }),
				step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "vm-name",
							children: "Virtual machine name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "vm-name",
							value: name,
							onChange: (e) => setName(e.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Guest OS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: osId,
							onValueChange: (v) => {
								setOsId(v);
								const g = GUEST_CATALOG.find((x) => x.id === v);
								if (g) {
									setCpu(String(g.cpu));
									setMem(String(g.memoryMb / 1024));
									setDisk(String(g.diskGb));
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GUEST_CATALOG.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: g.id,
								children: g.name
							}, g.id)) })]
						})]
					})]
				}) : null,
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Host" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: hostId,
							onValueChange: setHostId,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: hosts.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: h.id,
								disabled: h.state === "maintenance",
								children: h.name
							}, h.id)) })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "cpu",
								children: "vCPU"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "cpu",
								type: "number",
								min: 1,
								max: 32,
								value: cpu,
								onChange: (e) => setCpu(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "mem",
								children: "Memory (GB)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "mem",
								type: "number",
								min: 1,
								max: 128,
								value: mem,
								onChange: (e) => setMem(e.target.value)
							})]
						})]
					})]
				}) : null,
				step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "disk",
								children: "Disk (GB)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "disk",
								type: "number",
								min: 8,
								max: 4096,
								value: disk,
								onChange: (e) => setDisk(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Datastore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: dsId,
								onValueChange: setDsId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: datastores.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: d.id,
									children: [
										d.name,
										" (",
										d.type,
										")"
									]
								}, d.id)) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: netId,
								onValueChange: setNetId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: networks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: n.id,
									children: [
										n.name,
										" · VLAN ",
										n.vlan
									]
								}, n.id)) })]
							})]
						})
					]
				}) : null,
				step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "rounded-md bg-secondary p-3 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: name })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Guest OS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: os.name })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "CPU / Memory"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
								cpu,
								" vCPU · ",
								mem,
								" GB"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Disk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
								disk,
								" GB on ",
								datastores.find((d) => d.id === dsId)?.name
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Network"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: networks.find((n) => n.id === netId)?.name })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Host"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "truncate pl-4",
								children: hosts.find((h) => h.id === hostId)?.name
							})]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => onOpenChange(false),
						children: "Cancel"
					}),
					step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setStep((s) => s - 1),
						children: "Back"
					}) : null,
					step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setStep((s) => s + 1),
						disabled: step === 0 && !name.trim(),
						children: "Next"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: finish,
						children: "Finish"
					})
				] })
			]
		})
	});
}
function LogoMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex size-7 flex-col justify-center gap-0.5 rounded-md bg-secondary p-1",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 rounded-sm bg-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-0.5 h-1 rounded-sm bg-primary/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-1 rounded-sm bg-primary/40" })
		]
	});
}
function Workspace() {
	const selection = useLab((s) => s.selection);
	const vms = useLab((s) => s.vms);
	const hosts = useLab((s) => s.hosts);
	if (selection.kind === "home" || selection.kind === "datacenter") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	if (selection.kind === "vms") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmListView, {});
	if (selection.kind === "cluster") {
		const cl = clusters.find((c) => c.id === selection.id);
		return cl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClusterView, { cluster: cl }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	}
	if (selection.kind === "host") {
		const host = hosts.find((h) => h.id === selection.id);
		return host ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostView, { host }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	}
	if (selection.kind === "vm") {
		const vm = vms.find((v) => v.id === selection.id);
		return vm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmView, { vm }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	}
	if (selection.kind === "datastore") {
		const ds = datastores.find((d) => d.id === selection.id);
		return ds ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatastoreView, { ds }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	}
	if (selection.kind === "network") {
		const net = networks.find((n) => n.id === selection.id);
		return net ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkView, { net }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {});
}
function TasksPane() {
	const tasks = useLab((s) => s.tasks);
	const open = useLab((s) => s.tasksOpen);
	const setOpen = useLab((s) => s.setTasksOpen);
	const running = tasks.filter((t) => t.status === "running").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col border-t border-border bg-chrome",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex h-8 items-center justify-between px-3 text-2xs font-medium uppercase tracking-wide text-muted-foreground",
			onClick: () => setOpen(!open),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Recent Tasks ", running ? `· ${running} running` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: open ? "Hide" : "Show" })]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-2xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "sticky top-0 bg-chrome text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-1 font-medium",
							children: "Task"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-1 font-medium",
							children: "Target"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-1 font-medium",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-1 font-medium",
							children: "Progress"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 4,
					className: "px-3 py-4 text-muted-foreground",
					children: "No recent tasks"
				}) }) : tasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-1.5",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-1.5 text-muted-foreground",
							children: t.target
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: t.status === "success" ? "running" : t.status === "error" ? "critical" : "busy",
								children: t.status
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: t.progress,
									className: "w-24"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular text-muted-foreground",
									children: [t.progress, "%"]
								})]
							})
						})
					]
				}, t.id)) })]
			})
		}) : null]
	});
}
function AlertsMenu({ open, onOpenChange }) {
	const select = useLab((s) => s.select);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute right-2 top-12 z-40 w-80 rounded-lg border border-border bg-popover p-2 shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-2 py-1 text-xs font-medium",
			children: "Alerts"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: seedAlerts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "w-full rounded-md px-2 py-2 text-left hover:bg-accent",
			onClick: () => {
				if (a.objectKind === "vm" && a.objectId) select({
					kind: "vm",
					id: a.objectId
				});
				if (a.objectKind === "datastore" && a.objectId) select({
					kind: "datastore",
					id: a.objectId
				});
				if (a.objectKind === "host" && a.objectId) select({
					kind: "host",
					id: a.objectId
				});
				onOpenChange(false);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: a.level === "warning" ? "warning" : "outline",
					children: a.level
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs",
					children: a.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-2xs text-muted-foreground",
				children: a.body
			})]
		}) }, a.id)) })]
	});
}
function AppShell() {
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [wizard, setWizard] = (0, import_react.useState)(false);
	const [palette, setPalette] = (0, import_react.useState)(false);
	const [alerts, setAlerts] = (0, import_react.useState)(false);
	const [clock, setClock] = (0, import_react.useState)(() => formatClock(Date.now()));
	const tick = useLab((s) => s.tick);
	const tasksOpen = useLab((s) => s.tasksOpen);
	const running = useLab((s) => s.vms).filter((v) => v.state === "poweredOn").length;
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			tick();
			setClock(formatClock(Date.now()));
		}, 2e3);
		return () => window.clearInterval(id);
	}, [tick]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPalette(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh min-h-0 flex-col overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative flex h-12 shrink-0 items-center gap-2 border-b border-chrome-border bg-chrome px-2 md:px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "md:hidden",
						onClick: () => setNavOpen(true),
						"aria-label": "Open inventory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex items-center gap-2",
						onClick: () => useLab.getState().select({ kind: "home" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-sm font-medium tracking-tight sm:inline",
							children: "Aether Workstation"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "ml-1 hidden md:inline-flex",
						onClick: () => setWizard(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), "New VM"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPalette(true),
						className: "ml-auto flex h-9 min-w-0 max-w-sm flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 text-xs text-muted-foreground md:ml-8 md:flex-none md:w-72",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "Search inventory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "ml-auto hidden rounded-sm border border-border px-1 text-2xs md:inline",
								children: "Ctrl K"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "icon",
						variant: "ghost",
						className: "relative",
						onClick: () => setAlerts((v) => !v),
						"aria-label": "Alerts",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 size-1.5 rounded-full bg-warning" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "md:hidden",
						onClick: () => setWizard(true),
						"aria-label": "New virtual machine",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 pl-1 text-xs text-muted-foreground md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "admin" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsMenu, {
						open: alerts,
						onOpenChange: setAlerts
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden h-full w-64 shrink-0 border-r border-border md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inventory, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden min-h-0 flex-1 md:flex md:flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(qt, {
							orientation: "vertical",
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qt, {
									defaultSize: tasksOpen ? "78" : "94",
									minSize: "40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full min-h-0 overflow-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(nn, { className: "h-1 bg-border hover:bg-primary/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qt, {
									defaultSize: tasksOpen ? "22" : "6",
									minSize: "6",
									maxSize: "40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TasksPane, {})
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-0 flex-1 flex-col md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 flex-1 overflow-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("shrink-0", tasksOpen ? "h-40" : "h-8"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TasksPane, {})
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex h-7 shrink-0 items-center gap-3 border-t border-chrome-border bg-chrome px-3 text-2xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: ["Connected to ", VCENTER_HOST]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto tabular",
						children: [running, " VMs running"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular",
						children: clock
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: navOpen,
				onOpenChange: setNavOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Inventory" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inventory, { onNavigate: () => setNavOpen(false) })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewVmWizard, {
				open: wizard,
				onOpenChange: setWizard
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: palette,
				onOpenChange: setPalette
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				richColors: false
			})
		]
	});
}
function Splash() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col items-center justify-center bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex size-12 flex-col justify-center gap-1 rounded-lg bg-secondary p-2",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 rounded-sm bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-0.5 h-1.5 rounded-sm bg-primary/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-1.5 rounded-sm bg-primary/40" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 text-lg font-medium tracking-tight",
				children: "Aether Workstation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Connecting to vcenter.aether.lab"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-1 w-40 overflow-hidden rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-primary" })
			})
		]
	});
}
function Home() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useLab.persist.onFinishHydration(() => setReady(true));
		useLab.persist.rehydrate();
		if (useLab.persist.hasHydrated()) setReady(true);
		return unsub;
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
