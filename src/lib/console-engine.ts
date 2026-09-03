import type { VirtualMachine } from "./types";

export interface BootStep {
  delay: number;
  line: string;
}

export function idleConsole(vm: Pick<VirtualMachine, "name" | "family" | "guestOs">): string[] {
  if (vm.family === "windows") {
    return [
      "",
      vm.guestOs.includes("2022") ? "Windows Server 2022 Standard" : "Windows 11 Pro",
      "Aether Guest Tools 13.0.2  —  running",
      "",
      `C:\\Users\\Administrator>`,
    ];
  }
  if (vm.family === "other") {
    return ["", `FreeBSD/amd64 ( ${vm.name} ) (ttyv0)`, "", `root@${vm.name}:~ # `];
  }
  return ["", `${vm.name} ttyS0`, "", `root@${vm.name}:~# `];
}


export function getBootSequence(vm: VirtualMachine): BootStep[] {
  if (vm.family === "windows") {
    return [
      { delay: 40, line: "PhoenixBIOS 4.0 Release 6.0  Copyright 1985-2024" },
      { delay: 90, line: `CPU = ${vm.cpu} Cores    ${vm.memoryMb} MB Memory` },
      { delay: 220, line: `Memory Test : ${vm.memoryMb}M OK` },
      { delay: 180, line: "" },
      { delay: 200, line: "Aether SeaBIOS (version 1.16.3)" },
      { delay: 280, line: "Booting from Hard Disk..." },
      { delay: 420, line: "" },
      { delay: 80, line: "Starting Windows..." },
      { delay: 520, line: "" },
      { delay: 200, line: vm.guestOs.includes("2022") ? "Windows Server 2022 Standard" : "Windows 11 Pro" },
      { delay: 240, line: "" },
      { delay: 180, line: "Aether Guest Tools 13.0.2  —  running" },
      { delay: 160, line: "" },
      { delay: 80, line: `C:\\Users\\Administrator>` },
    ];
  }

  const pretty =
    vm.guestOs.startsWith("Ubuntu") ? "Ubuntu 24.04.2 LTS" :
    vm.guestOs.startsWith("Debian") ? "Debian GNU/Linux 12" :
    vm.guestOs.startsWith("Alma") ? "AlmaLinux 9.4" :
    vm.guestOs.startsWith("FreeBSD") ? "FreeBSD 14.1-RELEASE" :
    "Linux";

  if (vm.family === "other") {
    return [
      { delay: 40, line: "Aether SeaBIOS (version 1.16.3)" },
      { delay: 180, line: `Memory Test : ${vm.memoryMb}M OK` },
      { delay: 240, line: "Booting from Hard Disk..." },
      { delay: 380, line: "" },
      { delay: 120, line: `${pretty}` },
      { delay: 200, line: "" },
      { delay: 100, line: `FreeBSD/amd64 ( ${vm.name} ) (ttyv0)` },
      { delay: 140, line: "" },
      { delay: 80, line: `${vm.name} login: ` },
    ];
  }

  return [
    { delay: 30, line: "PhoenixBIOS 4.0 Release 6.0  Copyright 1985-2024 Phoenix Technologies Ltd." },
    { delay: 80, line: `CPU = ${vm.cpu} Cores` },
    { delay: 180, line: `Memory Test : ${vm.memoryMb}M OK` },
    { delay: 120, line: "" },
    { delay: 160, line: "Aether SeaBIOS (version 1.16.3-aether)" },
    { delay: 220, line: "Booting from Hard Disk..." },
    { delay: 280, line: "" },
    { delay: 90, line: `Loading ${pretty} ...` },
    { delay: 200, line: `[    0.000000] Linux version 6.8.0-40-generic (build@aether)` },
    { delay: 70, line: `[    0.000000] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 ro` },
    { delay: 80, line: `[    0.142211] ACPI: Early table checksum verification disabled` },
    { delay: 90, line: `[    0.401882] smpboot: CPU0: Aether Virtual CPU @ 2.50GHz` },
    { delay: 70, line: `[    0.882104] pci 0000:00:0f.0: [15ad:0405] type 00 class 0x030000` },
    { delay: 80, line: `[    1.204441] scsi 0:0:0:0: Direct-Access     Aether   Virtual disk    1.0` },
    { delay: 90, line: `[    1.551002] vmxnet3 0000:03:00.0 eth0: NIC Link is Up 10000 Mbps` },
    { delay: 110, line: `[  OK  ] Started Journal Service.` },
    { delay: 80, line: `[  OK  ] Reached target Network.` },
    { delay: 70, line: `[  OK  ] Started OpenSSH server daemon.` },
    { delay: 90, line: `[  OK  ] Started Aether Guest Tools.` },
    { delay: 140, line: "" },
    { delay: 80, line: `${pretty}` },
    { delay: 40, line: `${vm.name} ttyS0` },
    { delay: 60, line: "" },
    { delay: 50, line: `${vm.name} login: ` },
  ];
}

function prompt(vm: VirtualMachine): string {
  if (vm.family === "windows") return `C:\\Users\\Administrator>`;
  if (vm.family === "other") return `root@${vm.name}:~ # `;
  return `root@${vm.name}:~# `;
}

export function runCommand(vm: VirtualMachine, raw: string): string[] {
  const cmd = raw.trim();
  const p = prompt(vm);
  const out: string[] = [];

  if (vm.family === "windows") {
    out.push(`${p}${raw}`);
    if (!cmd) return out;
    const c = cmd.toLowerCase();
    if (c === "help") {
      out.push("dir  ipconfig  hostname  whoami  ver  systeminfo  cls  reboot");
    } else if (c === "cls") {
      return ["__CLEAR__"];
    } else if (c === "dir") {
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
    } else if (c === "hostname") {
      out.push(vm.name);
    } else if (c === "whoami") {
      out.push("aether\\administrator");
    } else if (c === "ver") {
      out.push(vm.guestOs.includes("2022") ? "Microsoft Windows [Version 10.0.20348.2400]" : "Microsoft Windows [Version 10.0.22631.3880]");
    } else if (c === "systeminfo") {
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
  if (bin === "help") {
    out.push("ls  uname  hostname  ip  df  free  whoami  cat  top  uptime  ping  reboot  clear");
  } else if (bin === "ls") {
    out.push("bin   dev  home  lib   opt   root  sbin  tmp  usr  var");
    out.push("boot  etc  mnt   media proc  run   srv   sys");
  } else if (bin === "uname") {
    out.push(arg.includes("-") ? `Linux ${vm.name} 6.8.0-40-generic #40-Aether SMP x86_64 GNU/Linux` : "Linux");
  } else if (bin === "hostname") {
    out.push(vm.name);
  } else if (bin === "whoami") {
    out.push("root");
  } else if (bin === "ip" || bin === "ifconfig") {
    out.push("1: lo: <LOOPBACK,UP> mtu 65536");
    out.push("    inet 127.0.0.1/8");
    out.push("2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500");
    out.push(`    inet ${vm.ip ?? "0.0.0.0"}/24 brd 10.20.30.255`);
    out.push(`    ether ${vm.mac} txqueuelen 1000`);
  } else if (bin === "df") {
    out.push("Filesystem      Size  Used Avail Use% Mounted on");
    out.push(`/dev/sda1        ${vm.diskGb}G   ${Math.round(vm.diskGb * 0.42)}G   ${Math.round(vm.diskGb * 0.58)}G  42% /`);
  } else if (bin === "free") {
    const tot = vm.memoryMb;
    const used = Math.round(tot * (vm.memUsage / 100));
    out.push("               total        used        free      shared  buff/cache   available");
    out.push(`Mem:         ${String(tot).padStart(8)}    ${String(used).padStart(8)}    ${String(tot - used).padStart(8)}         4      1024      ${tot - used}`);
  } else if (bin === "cat") {
    if (arg.includes("os-release")) {
      out.push(`PRETTY_NAME="${vm.guestOs}"`);
      out.push(`HOME_URL="https://aether.lab"`);
    } else if (arg.includes("hostname")) {
      out.push(vm.name);
    } else {
      out.push(`cat: ${arg || "—"}: No such file or directory`);
    }
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
    const h = Math.floor((vm.uptimeSec % 86400) / 3600);
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
  } else {
    out.push(`-bash: ${bin}: command not found`);
  }
  out.push(p);
  return out;
}

export function assignedIp(existing: (string | null)[]): string {
  const used = new Set(existing.filter(Boolean) as string[]);
  for (let i = 80; i < 250; i++) {
    const ip = `10.20.30.${i}`;
    if (!used.has(ip)) return ip;
  }
  return `10.20.30.${100 + (existing.length % 50)}`;
}

export function poweredOffConsole(name: string): string[] {
  return [
    "",
    `  ${name} is powered off.`,
    "  Use Power On from the toolbar to start this virtual machine.",
    "",
  ];
}

export function suspendedOverlay(): string {
  return "Suspended — memory state preserved on datastore.";
}
