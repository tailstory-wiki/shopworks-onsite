---
layout: partial.njk
title: OnSite Shipping DSNs
---

> [!WARNING]
> OnSite v10.0 requires FileMaker v19.0, which has dropped support for x86.<br />
> To avoid conflicting with the existing 32 bit DSN, the 64 bit DSN was created with an `64` suffix.<br />
> i.e., `SWUPSTracking` and `SWFedExTracking` now need to be `SWUPSTracking64` and `SWFedExTracking64`,
> respectively.<br />
> The [documentation for the integration](https://www.shopworkshelp.com/index.php?action=artikel&id=40) has _not_ been
> updated, and does not show the new driver names.
